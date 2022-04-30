// Remove built-in node...
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
    this.addWidget("button","+",null,function(){
            that.addCableInput("In");
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
    this.addWidget("button","+",null,function(){
            that.addChannelInput("In");
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
    this.addCableInput("MIDI");
    this.addChannelOutput("Channel");
    this.addCableOutput("MIDI");
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
    this.addCableInput("MIDI");
    this.addCableOutput("MIDI");
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
