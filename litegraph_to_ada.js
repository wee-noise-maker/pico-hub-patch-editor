// Remove built-in nodes...
LiteGraph.registered_node_types = {}

LGraph.prototype.toPicoHubConfig = function () {
    const data = this.serialize();
    var text = ""
    for (const node of data.nodes) {
            text += "node=" + node.type + ":";
            text += "id=" + node.id + ":";
            text += "pos_x=" + node.pos[0] + ":";
            text += "pos_y=" + node.pos[1] + ":";

            if (node.properties) {
                for (const [key, value] of Object.entries(node.properties)) {
                    text += key + "=" + value + ":";
                }
            }
            text += "\n";
        }

    for (const link of data.links) {
        const id = link[0];
        const origin_id = link[1];
        const origin_slot = link[2];
        const target_id = link[3];
        const target_slot = link[4];
        const type = link[5];

        text += "link=" + type + ":";
        text += origin_id + "=" + origin_slot + ":";
        text += target_id + "=" + target_slot;
        text += ":\n";
    }

    return text;
}

LGraph.prototype.loadPicoHubConfig = function (config) {
    graph.clear();

    var conf_id_to_graph_id = {}

    for (const line of config.split('\n')) {
        if (line.startsWith("node")) {

            var node = null;
            var id = -1;

            for (const elt of line.split(':')) {
                const [key, value] = elt.split('=');

                if (key == "node") {
                    node = LiteGraph.createNode(value);
                    if (!node) {
                        alert("Cannot create node: " + value);
                        return;
                    }
                } else if (key == "id") {
                    id = parseInt(value);
                } else if (key == "pos_x") {
                    node.pos[0] = parseInt(value);
                } else if (key == "pos_y") {
                    node.pos[1] = parseInt(value);
                } else {
                    var val = value;
                    if (val == "true") {
                        val = true;
                    } else if (val == "false"){
                        val = false;
                    }
                    // TODO: parse escape chars in string values

                    node.setProperty(key, val);
                }
            }

            graph.add(node);
            conf_id_to_graph_id[id] = node.id;

        } else if (line.startsWith("link")) {
            const [type, org, tar] = line.split(':');

            [org_id, org_slot] = org.split('=');
            [tar_id, tar_slot] = tar.split('=');

            const origin_id = conf_id_to_graph_id[parseInt(org_id)];
            const target_id = conf_id_to_graph_id[parseInt(tar_id)];
            var origin = graph.getNodeById(origin_id);
            var target = graph.getNodeById(target_id);

            origin.connect(parseInt(org_slot), target, parseInt(tar_slot));
        }
    }
}

LGraph.prototype.isCyclic= function () {

    let adj = [];

    // This function is a variation of DFSUtil() in
    // https://www.geeksforgeeks.org/archives/18212
    function isCyclicUtil(i,visited,recStack)
    {
        // Mark the current node as visited and
        // part of recursion stack
        if (recStack[i])
            return true;

        if (visited[i])
            return false;

        visited[i] = true;

        recStack[i] = true;
        let children = adj[i];

        for (const c in children) {
            if (isCyclicUtil(children[c], visited, recStack)) {
                return true;
            }
        }

        recStack[i] = false;

        return false;
    }

    // Returns true if the graph contains a
    // cycle, else false.
    // This function is a variation of DFS() in
    // https://www.geeksforgeeks.org/archives/18212
    function isCyclic()
    {
        // Mark all the vertices as not visited and
        // not part of recursion stack
        let visited = [];
        let recStack = [];
        for(const node in adj)
        {
            visited[node]=false;
            recStack[node]=false;
        }

        // Call the recursive helper function to
        // detect cycle in different DFS trees
        for(const node in adj) {
            if (adj[node]) {
                if (isCyclicUtil(node, visited, recStack)) {
                    return true;
                }
            }
        }

        return false;
    }

   const data = this.serialize();

   for (const node of data.nodes) {
       adj[node.id] = [];
   }

   for (const link of data.links) {
       const origin_id = link[1];
       const target_id = link[3];

       adj[origin_id].push(target_id);
   }

   return isCyclic();
}
