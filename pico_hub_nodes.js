// Remove built-in nodes...
LiteGraph.registered_node_types = {}

LGraphNode.prototype.addCableInput = function (label) {
    this.addInput(label, "MIDI_Cable", {shape: LiteGraph.BOX_SHAPE})
}

LGraphNode.prototype.addCableOutput = function (label) {
    this.addOutput(label, "MIDI_Cable", {shape: LiteGraph.BOX_SHAPE})
}

LGraphNode.prototype.addChannelInput = function (label) {
    this.addInput(label, "MIDI_Channel", {shape: LiteGraph.ARROW_SHAPE})
}

LGraphNode.prototype.addChannelOutput = function (label) {
    this.addOutput(label, "MIDI_Channel", {shape: LiteGraph.ARROW_SHAPE})
}

LGraphNode.prototype.addValueInput = function (label) {
    this.addInput(label, "MIDI_Value", {shape: LiteGraph.ROUND_SHAPE})
}

LGraphNode.prototype.addValueOutput = function (label) {
    this.addOutput(label, "MIDI_Value", {shape: LiteGraph.ROUND_SHAPE})
}

function MIDI_Chan_Ids()
{
 return [...Array(16).keys()].map(x => x + 1);
}

function TRS_OUT_Ids()
{
 return [...Array(8).keys()].map(x => x + 1);
}

function NodeTrsIn()
{
    this.addCableOutput("Cable");
}
NodeTrsIn.title = "TRS Input";
LiteGraph.registerNodeType("input/trs_in", NodeTrsIn);

function NodeTrsOut()
{
    this.addCableInput("Cable");
    this.properties = { port: 1 };
    this.combo_widget = this.addWidget("combo", "Port", 1, null,
                                       { values:TRS_OUT_Ids(),
                                         property: "port"});
}
NodeTrsOut.title = "TRS Output";
NodeTrsOut.desc = "MIDI TRS-A Output port";
NodeTrsOut.color = "#243";
LiteGraph.registerNodeType("output/trs_out", NodeTrsOut);

function NodeUSBIn()
{
    this.addCableOutput("Cable");
}
NodeUSBIn.title = "USB Input";
LiteGraph.registerNodeType("input/usb_in", NodeUSBIn);

function NodeUSBOut()
{
    this.addCableInput("Cable");
}
NodeUSBOut.title = "USB Output";
LiteGraph.registerNodeType("output/usb_out", NodeUSBOut);

function NodeLSDJIn()
{
    this.addCableOutput("Cable");
}
NodeLSDJIn.title = "LSDJ Input";
LiteGraph.registerNodeType("input/lsdj_in", NodeLSDJIn);

function NodeMGBOut()
{
    this.addCableInput("Cable");
}
NodeMGBOut.title = "mGB";
LiteGraph.registerNodeType("output/mgb_out", NodeMGBOut);


function NodeCableMixer() {
    that = this;
    this.addCableInput("In");
    this.addCableInput("In");
    this.addCableOutput("Out");
    this.properties = { number_of_inputs: 2 };
    this.addWidget("button","+",null,function(){
            that.addCableInput("In");
            that.properties.number_of_inputs += 1;
        });
}
NodeCableMixer.title = "Cable Mixer";
NodeCableMixer.desc = "Mix messages from different cable in a single one";
LiteGraph.registerNodeType("cable/mixer", NodeCableMixer);


function NodeChannelMixer() {
    that = this;
    this.addChannelInput("In");
    this.addChannelInput("In");
    this.addChannelOutput("Out");
    this.properties = { number_of_inputs: 2 };
    this.addWidget("button","+",null,function(){
            that.addChannelInput("In");
            that.properties.number_of_inputs += 1;
        });
}

NodeChannelMixer.title = "Channel Mixer";
NodeChannelMixer.desc = "Mix messages from different channels in a single one";
LiteGraph.registerNodeType("channel/mixer", NodeChannelMixer);


function NodeOnNoteMessage()
{
    this.addChannelInput("Channel");
    this.addValueOutput("Key");
    this.addValueOutput("Velocity");
}
NodeOnNoteMessage.title = "On Note Event";
LiteGraph.registerNodeType("message/on_note", NodeOnNoteMessage);

function NodeFilterChannel()
{
    this.addCableInput("Cable");
    this.addChannelOutput("Channel");
    this.addCableOutput("Cable");
    this.properties = { channel_id : 1 };
    this.combo_widget = this.addWidget("combo", "Channel ID", 1, null,
                                       { values:MIDI_Chan_Ids(),
                                         property: "channel_id"});
}
NodeFilterChannel.title = "Filter Channel";
LiteGraph.registerNodeType("channel/filter", NodeFilterChannel);

function NodeMergeChannel()
{
    this.addChannelInput("Channel");
    this.addCableInput("Cable");
    this.addCableOutput("Cable");
}
NodeMergeChannel.title = "MergeChannel";
LiteGraph.registerNodeType("channel/merge", NodeMergeChannel);

function NodeChannelMap()
{
    this.addChannelInput("Channel");
    this.addChannelOutput("Channel");
    this.properties = { channel_id : 1 };
    this.combo_widget = this.addWidget("combo", "New Channel ID", 1, null,
                                       { values:MIDI_Chan_Ids(),
                                         property: "channel_id"});
}
NodeChannelMap.title = "Channel Map";
LiteGraph.registerNodeType("channel/map", NodeChannelMap);


function NodeTest()
{
    this.addInput("MIDI ","MIDI_Cable");
    this.addOutput("Channel","MIDI_Channel");
    this.addOutput("MIDI","MIDI_Cable", {shape: LiteGraph.ARROW_SHAPE});
    this.int_widget = this.addWidget("number","Number", 1, null, { min: 1, max: 16, step: 10} );
    this.slider_widget = this.addWidget("slider","Slider", 1, null, { min: 1, max: 16, step: 10} );
    this.combo_widget = this.addWidget("combo","Combo", "red", null, { values:["red","green","blue"]} );
    this.text_widget = this.addWidget("text","Text", "default text", null);
    this.combo_widget = this.addWidget("toggle","Toggle", true, null);
    this.combo_widget = this.addWidget("button","Button", "red", null);
    this.serialize_widgets = true;
}
NodeTest.title = "Test Node";
LiteGraph.registerNodeType("pico_hub/test", NodeTest);


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
        text += origin_id + "-" + origin_slot + ":";
        text += target_id + "-" + target_slot;
        text += "\n";
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
                } else if (key == "id") {
                    id = parseInt(value);
                } else if (key == "pos_x") {
                    node.pos[0] = parseInt(value);
                } else if (key == "pos_y") {
                    node.pos[1] = parseInt(value);
                } else {
                    if (node.properties && key in node.properties) {
                        node.properties[key] = value;
                    }
                }
            }

            if (node.type == "cable/mixer") {
                var cnt = 2;
                while (cnt < node.properties.number_of_inputs) {
                    node.addCableInput("In");
                    cnt += 1;
                }
            } else if (node.type == "channel/mixer") {
                var cnt = 2;
                while (cnt < node.properties.number_of_inputs) {
                    node.addChannelInput("In");
                    cnt += 1;
                }
            }

            graph.add(node);
            conf_id_to_graph_id[id] = node.id;

        } else if (line.startsWith("link")) {
            const [type, org, tar] = line.split(':');

            [org_id, org_slot] = org.split('-');
            [tar_id, tar_slot] = tar.split('-');

            const origin_id = conf_id_to_graph_id[parseInt(org_id)];
            const target_id = conf_id_to_graph_id[parseInt(tar_id)];
            var origin = graph.getNodeById(origin_id);
            var target = graph.getNodeById(target_id);

            origin.connect(parseInt(org_slot), target, parseInt(tar_slot));
        }
    }
}
