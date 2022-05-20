function Node_INPUT_test_clock_input()
{
  that = this;
  this.addOutput("Clock", "CLOCK_PORT", {shape: LiteGraph.CARD_SHAPE});
  this.properties = {};
}
Node_INPUT_test_clock_input.title = "test_clock_input";
LiteGraph.registerNodeType("INPUT/test_clock_input", Node_INPUT_test_clock_input);
function Node_INPUT_test_data_input()
{
  that = this;
  this.addOutput("Data", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
}
Node_INPUT_test_data_input.title = "test_data_input";
LiteGraph.registerNodeType("INPUT/test_data_input", Node_INPUT_test_data_input);
function Node_INPUT_test_channel_input()
{
  that = this;
  this.addOutput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
}
Node_INPUT_test_channel_input.title = "test_channel_input";
LiteGraph.registerNodeType("INPUT/test_channel_input", Node_INPUT_test_channel_input);
function Node_INPUT_test_cable_input()
{
  that = this;
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
}
Node_INPUT_test_cable_input.title = "test_cable_input";
LiteGraph.registerNodeType("INPUT/test_cable_input", Node_INPUT_test_cable_input);
function Node_UTILS_volca_sample()
{
  that = this;
  this.addInput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
}
Node_UTILS_volca_sample.title = "volca_sample";
LiteGraph.registerNodeType("UTILS/volca_sample", Node_UTILS_volca_sample);
function Node_OUTPUT_print_clock()
{
  that = this;
  this.addInput("In", "CLOCK_PORT", {shape: LiteGraph.CARD_SHAPE});
  this.properties = {};
  this.properties["Name"] = "";
  this.addWidget("text", "Name", "", null,
               {property: "Name"});
}
Node_OUTPUT_print_clock.title = "print_clock";
LiteGraph.registerNodeType("OUTPUT/print_clock", Node_OUTPUT_print_clock);
function Node_OUTPUT_print_cable()
{
  that = this;
  this.addInput("In", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.properties["Name"] = "";
  this.addWidget("text", "Name", "", null,
               {property: "Name"});
}
Node_OUTPUT_print_cable.title = "print_cable";
LiteGraph.registerNodeType("OUTPUT/print_cable", Node_OUTPUT_print_cable);
function Node_OUTPUT_print_channel()
{
  that = this;
  this.addInput("In", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.properties["Name"] = "";
  this.addWidget("text", "Name", "", null,
               {property: "Name"});
}
Node_OUTPUT_print_channel.title = "print_channel";
LiteGraph.registerNodeType("OUTPUT/print_channel", Node_OUTPUT_print_channel);
function Node_OUTPUT_print_data()
{
  that = this;
  this.addInput("In", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
  this.properties["Name"] = "";
  this.addWidget("text", "Name", "", null,
               {property: "Name"});
}
Node_OUTPUT_print_data.title = "print_data";
LiteGraph.registerNodeType("OUTPUT/print_data", Node_OUTPUT_print_data);
function Node_CABLE_cable_mixer()
{
  that = this;
  this.addInput("In", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.addInput("In", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.addOutput("Out", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.properties["input_count"] =  2;
}
Node_CABLE_cable_mixer.title = "cable_mixer";
LiteGraph.registerNodeType("CABLE/cable_mixer", Node_CABLE_cable_mixer);
function Node_DATA_modulo_data()
{
  that = this;
  this.addInput("A", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("B", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Result", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
}
Node_DATA_modulo_data.title = "modulo_data";
LiteGraph.registerNodeType("DATA/modulo_data", Node_DATA_modulo_data);
function Node_DATA_div_data()
{
  that = this;
  this.addInput("A", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("B", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Result", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
}
Node_DATA_div_data.title = "div_data";
LiteGraph.registerNodeType("DATA/div_data", Node_DATA_div_data);
function Node_DATA_mult_data()
{
  that = this;
  this.addInput("A", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("B", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Result", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
}
Node_DATA_mult_data.title = "mult_data";
LiteGraph.registerNodeType("DATA/mult_data", Node_DATA_mult_data);
function Node_DATA_sub_data()
{
  that = this;
  this.addInput("A", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("B", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Result", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
}
Node_DATA_sub_data.title = "sub_data";
LiteGraph.registerNodeType("DATA/sub_data", Node_DATA_sub_data);
function Node_DATA_add_data()
{
  that = this;
  this.addInput("A", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("B", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Result", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
}
Node_DATA_add_data.title = "add_data";
LiteGraph.registerNodeType("DATA/add_data", Node_DATA_add_data);
function Node_DATA_data_mixer()
{
  that = this;
  this.addInput("In", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("In", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Out", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
  this.properties["input_count"] =  2;
}
Node_DATA_data_mixer.title = "data_mixer";
LiteGraph.registerNodeType("DATA/data_mixer", Node_DATA_data_mixer);
function Node_DATA_const_data()
{
  that = this;
  this.addOutput("Out", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
  this.properties["value"] =  0;
  this.addWidget("slider", "value",  0, null,
             { min:  0, max:  127, step: 1,
               property: "value"});
}
Node_DATA_const_data.title = "const_data";
LiteGraph.registerNodeType("DATA/const_data", Node_DATA_const_data);
function Node_CLOCK_clock_mixer()
{
  that = this;
  this.addInput("In", "CLOCK_PORT", {shape: LiteGraph.CARD_SHAPE});
  this.addInput("In", "CLOCK_PORT", {shape: LiteGraph.CARD_SHAPE});
  this.addOutput("Out", "CLOCK_PORT", {shape: LiteGraph.CARD_SHAPE});
  this.properties = {};
  this.properties["input_count"] =  2;
}
Node_CLOCK_clock_mixer.title = "clock_mixer";
LiteGraph.registerNodeType("CLOCK/clock_mixer", Node_CLOCK_clock_mixer);
function Node_CLOCK_filter_clock()
{
  that = this;
  this.addInput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.addOutput("Clock", "CLOCK_PORT", {shape: LiteGraph.CARD_SHAPE});
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.properties["passthrough"] = false;
  this.addWidget("toggle", "passthrough", false, null,
               {property: "passthrough"});
}
Node_CLOCK_filter_clock.title = "filter_clock";
LiteGraph.registerNodeType("CLOCK/filter_clock", Node_CLOCK_filter_clock);
function Node_CHANNEL_merge_channel()
{
  that = this;
  this.addInput("Channel_Id", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addInput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.properties["Channel_Id"] =  1;
  this.addWidget("combo", "Channel_Id",  1, null,
             { values:[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
],
               property: "Channel_Id"});
}
Node_CHANNEL_merge_channel.title = "merge_channel";
LiteGraph.registerNodeType("CHANNEL/merge_channel", Node_CHANNEL_merge_channel);
function Node_CHANNEL_map_channel()
{
  that = this;
  this.addInput("In_Channel_Id", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Out_Channel_Id", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.properties["In_Channel_Id"] =  1;
  this.addWidget("combo", "In_Channel_Id",  1, null,
             { values:[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
],
               property: "In_Channel_Id"});
  this.properties["Out_Channel_Id"] =  2;
  this.addWidget("combo", "Out_Channel_Id",  2, null,
             { values:[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
],
               property: "Out_Channel_Id"});
}
Node_CHANNEL_map_channel.title = "map_channel";
LiteGraph.registerNodeType("CHANNEL/map_channel", Node_CHANNEL_map_channel);
function Node_CHANNEL_keyboard_split()
{
  that = this;
  this.addInput("Split Key", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("High Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Low Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.properties["Split Key"] =  60;
  this.addWidget("slider", "Split Key",  60, null,
             { min:  0, max:  127, step: 1,
               property: "Split Key"});
}
Node_CHANNEL_keyboard_split.title = "keyboard_split";
LiteGraph.registerNodeType("CHANNEL/keyboard_split", Node_CHANNEL_keyboard_split);
function Node_CHANNEL_channel_mixer()
{
  that = this;
  this.addInput("In", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addInput("In", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Out", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.properties["input_count"] =  2;
}
Node_CHANNEL_channel_mixer.title = "channel_mixer";
LiteGraph.registerNodeType("CHANNEL/channel_mixer", Node_CHANNEL_channel_mixer);
function Node_CHANNEL_get_note_msg()
{
  that = this;
  this.addInput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Key", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Velocity", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.properties["Note On"] = true;
  this.addWidget("toggle", "Note On", true, null,
               {property: "Note On"});
  this.properties["Note Off"] = false;
  this.addWidget("toggle", "Note Off", false, null,
               {property: "Note Off"});
  this.properties["Aftertouch"] = false;
  this.addWidget("toggle", "Aftertouch", false, null,
               {property: "Aftertouch"});
  this.properties["Passthrough"] = false;
  this.addWidget("toggle", "Passthrough", false, null,
               {property: "Passthrough"});
}
Node_CHANNEL_get_note_msg.title = "get_note_msg";
LiteGraph.registerNodeType("CHANNEL/get_note_msg", Node_CHANNEL_get_note_msg);
function Node_CHANNEL_send_cc()
{
  that = this;
  this.addInput("Controller", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Value", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.properties["Controller"] =  0;
  this.addWidget("slider", "Controller",  0, null,
             { min:  0, max:  127, step: 1,
               property: "Controller"});
}
Node_CHANNEL_send_cc.title = "send_cc";
LiteGraph.registerNodeType("CHANNEL/send_cc", Node_CHANNEL_send_cc);
function Node_CHANNEL_get_cc()
{
  that = this;
  this.addInput("Controller", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Value", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.properties["Controller"] =  0;
  this.addWidget("slider", "Controller",  0, null,
             { min:  0, max:  127, step: 1,
               property: "Controller"});
  this.properties["Passthrough"] = false;
  this.addWidget("toggle", "Passthrough", false, null,
               {property: "Passthrough"});
}
Node_CHANNEL_get_cc.title = "get_cc";
LiteGraph.registerNodeType("CHANNEL/get_cc", Node_CHANNEL_get_cc);
function Node_CHANNEL_filter_channel()
{
  that = this;
  this.addInput("Channel_Id", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.addOutput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.properties["channel_id"] =  1;
  this.addWidget("combo", "channel_id",  1, null,
             { values:[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
],
               property: "channel_id"});
  this.properties["passthrough"] = false;
  this.addWidget("toggle", "passthrough", false, null,
               {property: "passthrough"});
}
Node_CHANNEL_filter_channel.title = "filter_channel";
LiteGraph.registerNodeType("CHANNEL/filter_channel", Node_CHANNEL_filter_channel);
function Node_CHANNEL_const_chan_id()
{
  that = this;
  this.addOutput("Out", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
  this.properties["channel id"] =  1;
  this.addWidget("combo", "channel id",  1, null,
             { values:[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
],
               property: "channel id"});
}
Node_CHANNEL_const_chan_id.title = "const_chan_id";
LiteGraph.registerNodeType("CHANNEL/const_chan_id", Node_CHANNEL_const_chan_id);
