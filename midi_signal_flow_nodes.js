function Node_UTILS_poly_dispatch()
{
  var that = this;
  this.addInput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
  this.properties["voices"] =  2;
  this.properties["voices"] = 1;
  this.addWidget("combo", "voices", 2, null,
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
],
               property: "voices"});
  this.lg2ada_property_callback["voices"] = function (value, widget, node) {
                     const current = that.outputs.length;
                     const diff = value - current;

                     if (diff < 0) {
                         for (i = 0; i < -diff; i++) {
                             that.removeOutput(that.outputs.length - 1);
                         }
                     } else if (diff > 0) {
                         for (i = 0; i < diff; i++) {
                             // We should always have at least one port
                             that.addOutput(that.outputs[0].name,
                                            that.outputs[0].type,
                                            {shape: that.outputs[0].shape});
                         }
                     }
                 }
}
Node_UTILS_poly_dispatch.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_UTILS_poly_dispatch.title = "poly_dispatch";
LiteGraph.registerNodeType("UTILS/poly_dispatch", Node_UTILS_poly_dispatch);
function Node_UTILS_volca_sample()
{
  var that = this;
  this.addInput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
}
Node_UTILS_volca_sample.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_UTILS_volca_sample.title = "volca_sample";
LiteGraph.registerNodeType("UTILS/volca_sample", Node_UTILS_volca_sample);
function Node_CABLE_cable_mixer()
{
  var that = this;
  this.addInput("In", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.addInput("In", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.addOutput("Out", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
  this.properties["input_count"] =  2;
  this.properties["input_count"] = 1;
  this.addWidget("combo", "input_count", 2, null,
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
               property: "input_count"});
  this.lg2ada_property_callback["input_count"] = function (value, widget, node) {
                     const current = that.inputs.length;
                     const diff = value - current;

                     if (diff < 0) {
                         for (i = 0; i < -diff; i++) {
                             that.removeInput(that.inputs.length - 1);
                         }
                     } else if (diff > 0) {
                         for (i = 0; i < diff; i++) {
                             // We should always have at least one port
                             that.addInput(that.inputs[0].name,
                                            that.inputs[0].type,
                                            {shape: that.inputs[0].shape});
                         }
                     }
                 }
}
Node_CABLE_cable_mixer.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CABLE_cable_mixer.title = "cable_mixer";
LiteGraph.registerNodeType("CABLE/cable_mixer", Node_CABLE_cable_mixer);
function Node_DATA_modulo_data()
{
  var that = this;
  this.addInput("A", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("B", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Result", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
}
Node_DATA_modulo_data.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_DATA_modulo_data.title = "modulo_data";
LiteGraph.registerNodeType("DATA/modulo_data", Node_DATA_modulo_data);
function Node_DATA_div_data()
{
  var that = this;
  this.addInput("A", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("B", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Result", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
}
Node_DATA_div_data.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_DATA_div_data.title = "div_data";
LiteGraph.registerNodeType("DATA/div_data", Node_DATA_div_data);
function Node_DATA_mult_data()
{
  var that = this;
  this.addInput("A", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("B", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Result", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
}
Node_DATA_mult_data.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_DATA_mult_data.title = "mult_data";
LiteGraph.registerNodeType("DATA/mult_data", Node_DATA_mult_data);
function Node_DATA_sub_data()
{
  var that = this;
  this.addInput("A", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("B", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Result", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
}
Node_DATA_sub_data.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_DATA_sub_data.title = "sub_data";
LiteGraph.registerNodeType("DATA/sub_data", Node_DATA_sub_data);
function Node_DATA_add_data()
{
  var that = this;
  this.addInput("A", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("B", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Result", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
}
Node_DATA_add_data.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_DATA_add_data.title = "add_data";
LiteGraph.registerNodeType("DATA/add_data", Node_DATA_add_data);
function Node_DATA_data_mixer()
{
  var that = this;
  this.addInput("In", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("In", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Out", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
  this.properties["input_count"] =  2;
  this.properties["input_count"] = 1;
  this.addWidget("combo", "input_count", 2, null,
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
               property: "input_count"});
  this.lg2ada_property_callback["input_count"] = function (value, widget, node) {
                     const current = that.inputs.length;
                     const diff = value - current;

                     if (diff < 0) {
                         for (i = 0; i < -diff; i++) {
                             that.removeInput(that.inputs.length - 1);
                         }
                     } else if (diff > 0) {
                         for (i = 0; i < diff; i++) {
                             // We should always have at least one port
                             that.addInput(that.inputs[0].name,
                                            that.inputs[0].type,
                                            {shape: that.inputs[0].shape});
                         }
                     }
                 }
}
Node_DATA_data_mixer.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_DATA_data_mixer.title = "data_mixer";
LiteGraph.registerNodeType("DATA/data_mixer", Node_DATA_data_mixer);
function Node_DATA_const_data()
{
  var that = this;
  this.addOutput("Out", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
  this.properties["value"] =  0;
  this.addWidget("slider", "value",  0, null,
             { min:  0, max:  127, step: 1,
               property: "value"});
}
Node_DATA_const_data.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_DATA_const_data.title = "const_data";
LiteGraph.registerNodeType("DATA/const_data", Node_DATA_const_data);
function Node_CLOCK_clock_mixer()
{
  var that = this;
  this.addInput("In", "CLOCK_PORT", {shape: LiteGraph.CARD_SHAPE});
  this.addInput("In", "CLOCK_PORT", {shape: LiteGraph.CARD_SHAPE});
  this.addOutput("Out", "CLOCK_PORT", {shape: LiteGraph.CARD_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
  this.properties["input_count"] =  2;
  this.properties["input_count"] = 1;
  this.addWidget("combo", "input_count", 2, null,
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
               property: "input_count"});
  this.lg2ada_property_callback["input_count"] = function (value, widget, node) {
                     const current = that.inputs.length;
                     const diff = value - current;

                     if (diff < 0) {
                         for (i = 0; i < -diff; i++) {
                             that.removeInput(that.inputs.length - 1);
                         }
                     } else if (diff > 0) {
                         for (i = 0; i < diff; i++) {
                             // We should always have at least one port
                             that.addInput(that.inputs[0].name,
                                            that.inputs[0].type,
                                            {shape: that.inputs[0].shape});
                         }
                     }
                 }
}
Node_CLOCK_clock_mixer.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CLOCK_clock_mixer.title = "clock_mixer";
LiteGraph.registerNodeType("CLOCK/clock_mixer", Node_CLOCK_clock_mixer);
function Node_CLOCK_filter_clock()
{
  var that = this;
  this.addInput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.addOutput("Clock", "CLOCK_PORT", {shape: LiteGraph.CARD_SHAPE});
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
  this.properties["passthrough"] = false;
  this.addWidget("toggle", "passthrough", false, null,
               {property: "passthrough"});
}
Node_CLOCK_filter_clock.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CLOCK_filter_clock.title = "filter_clock";
LiteGraph.registerNodeType("CLOCK/filter_clock", Node_CLOCK_filter_clock);
function Node_CHANNEL_transpose_octave()
{
  var that = this;
  this.addInput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
  this.properties["octave"] =  1;
  this.addWidget("combo", "octave",  1, null,
             { values:[
                   -5,
                   -4,
                   -3,
                   -2,
                   -1,
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
],
               property: "octave"});
}
Node_CHANNEL_transpose_octave.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CHANNEL_transpose_octave.title = "transpose_octave";
LiteGraph.registerNodeType("CHANNEL/transpose_octave", Node_CHANNEL_transpose_octave);
function Node_CHANNEL_merge_channel()
{
  var that = this;
  this.addInput("Channel_Id", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addInput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
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
Node_CHANNEL_merge_channel.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CHANNEL_merge_channel.title = "merge_channel";
LiteGraph.registerNodeType("CHANNEL/merge_channel", Node_CHANNEL_merge_channel);
function Node_CHANNEL_map_channel()
{
  var that = this;
  this.addInput("In_Channel_Id", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Out_Channel_Id", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
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
Node_CHANNEL_map_channel.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CHANNEL_map_channel.title = "map_channel";
LiteGraph.registerNodeType("CHANNEL/map_channel", Node_CHANNEL_map_channel);
function Node_CHANNEL_keyboard_split()
{
  var that = this;
  this.addInput("Split Key", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("High Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Low Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
  this.properties["Split Key"] =  60;
  this.addWidget("slider", "Split Key",  60, null,
             { min:  0, max:  127, step: 1,
               property: "Split Key"});
}
Node_CHANNEL_keyboard_split.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CHANNEL_keyboard_split.title = "keyboard_split";
LiteGraph.registerNodeType("CHANNEL/keyboard_split", Node_CHANNEL_keyboard_split);
function Node_CHANNEL_channel_mixer()
{
  var that = this;
  this.addInput("In", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addInput("In", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Out", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
  this.properties["input_count"] =  2;
  this.properties["input_count"] = 1;
  this.addWidget("combo", "input_count", 2, null,
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
               property: "input_count"});
  this.lg2ada_property_callback["input_count"] = function (value, widget, node) {
                     const current = that.inputs.length;
                     const diff = value - current;

                     if (diff < 0) {
                         for (i = 0; i < -diff; i++) {
                             that.removeInput(that.inputs.length - 1);
                         }
                     } else if (diff > 0) {
                         for (i = 0; i < diff; i++) {
                             // We should always have at least one port
                             that.addInput(that.inputs[0].name,
                                            that.inputs[0].type,
                                            {shape: that.inputs[0].shape});
                         }
                     }
                 }
}
Node_CHANNEL_channel_mixer.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CHANNEL_channel_mixer.title = "channel_mixer";
LiteGraph.registerNodeType("CHANNEL/channel_mixer", Node_CHANNEL_channel_mixer);
function Node_CHANNEL_get_note_msg()
{
  var that = this;
  this.addInput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Key", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Velocity", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
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
Node_CHANNEL_get_note_msg.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CHANNEL_get_note_msg.title = "get_note_msg";
LiteGraph.registerNodeType("CHANNEL/get_note_msg", Node_CHANNEL_get_note_msg);
function Node_CHANNEL_send_cc()
{
  var that = this;
  this.addInput("Controller", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Value", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
  this.properties["Controller"] =  0;
  this.addWidget("slider", "Controller",  0, null,
             { min:  0, max:  127, step: 1,
               property: "Controller"});
}
Node_CHANNEL_send_cc.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CHANNEL_send_cc.title = "send_cc";
LiteGraph.registerNodeType("CHANNEL/send_cc", Node_CHANNEL_send_cc);
function Node_CHANNEL_get_cc()
{
  var that = this;
  this.addInput("Controller", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Value", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addOutput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
  this.properties["Controller"] =  0;
  this.addWidget("slider", "Controller",  0, null,
             { min:  0, max:  127, step: 1,
               property: "Controller"});
  this.properties["Passthrough"] = false;
  this.addWidget("toggle", "Passthrough", false, null,
               {property: "Passthrough"});
}
Node_CHANNEL_get_cc.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CHANNEL_get_cc.title = "get_cc";
LiteGraph.registerNodeType("CHANNEL/get_cc", Node_CHANNEL_get_cc);
function Node_CHANNEL_filter_channel()
{
  var that = this;
  this.addInput("Channel_Id", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.addInput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.addOutput("Channel", "CHANNEL_PORT", {shape: LiteGraph.ARROW_SHAPE});
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
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
Node_CHANNEL_filter_channel.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CHANNEL_filter_channel.title = "filter_channel";
LiteGraph.registerNodeType("CHANNEL/filter_channel", Node_CHANNEL_filter_channel);
function Node_CHANNEL_const_chan_id()
{
  var that = this;
  this.addOutput("Out", "DATA_PORT", {shape: LiteGraph.ROUND_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
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
Node_CHANNEL_const_chan_id.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_CHANNEL_const_chan_id.title = "const_chan_id";
LiteGraph.registerNodeType("CHANNEL/const_chan_id", Node_CHANNEL_const_chan_id);
function Node_OUTPUT_gblink_out()
{
  var that = this;
  this.addInput("In", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
}
Node_OUTPUT_gblink_out.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_OUTPUT_gblink_out.title = "gblink_out";
LiteGraph.registerNodeType("OUTPUT/gblink_out", Node_OUTPUT_gblink_out);
function Node_OUTPUT_usb_out()
{
  var that = this;
  this.addInput("In", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
}
Node_OUTPUT_usb_out.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_OUTPUT_usb_out.title = "usb_out";
LiteGraph.registerNodeType("OUTPUT/usb_out", Node_OUTPUT_usb_out);
function Node_OUTPUT_trs_out()
{
  var that = this;
  this.addInput("In", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
  this.properties["Port"] =  1;
  this.addWidget("combo", "Port",  1, null,
             { values:[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
],
               property: "Port"});
}
Node_OUTPUT_trs_out.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_OUTPUT_trs_out.title = "trs_out";
LiteGraph.registerNodeType("OUTPUT/trs_out", Node_OUTPUT_trs_out);
function Node_INPUT_gblink_in()
{
  var that = this;
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
}
Node_INPUT_gblink_in.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_INPUT_gblink_in.title = "gblink_in";
LiteGraph.registerNodeType("INPUT/gblink_in", Node_INPUT_gblink_in);
function Node_INPUT_usb_in()
{
  var that = this;
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
}
Node_INPUT_usb_in.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_INPUT_usb_in.title = "usb_in";
LiteGraph.registerNodeType("INPUT/usb_in", Node_INPUT_usb_in);
function Node_INPUT_trs_in()
{
  var that = this;
  this.addOutput("Cable", "CABLE_PORT", {shape: LiteGraph.BOX_SHAPE});
  this.properties = {};
  this.lg2ada_property_callback = {};
}
Node_INPUT_trs_in.prototype.onPropertyChanged = function (name, value) {
    if (this.lg2ada_property_callback) {
        if (this.lg2ada_property_callback[name]) {
            this.lg2ada_property_callback[name](value);
        }
    }
}
Node_INPUT_trs_in.title = "trs_in";
LiteGraph.registerNodeType("INPUT/trs_in", Node_INPUT_trs_in);
