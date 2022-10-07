
define(function(require, exports, module) {

    var dom = require("pilot/dom");

    var cssText = "\
.ace-tomorrow-night-blue .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-tomorrow-night-blue .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-tomorrow-night-blue .ace_gutter {\
  width: 50px;\
  background: #e8e8e8;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-tomorrow-night-blue .ace_gutter-layer {\
  width: 100%;\
  text-align: right;\
}\
\
.ace-tomorrow-night-blue .ace_gutter-layer .ace_gutter-cell {\
  padding-right: 6px;\
}\
\
.ace-tomorrow-night-blue .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-tomorrow-night-blue .ace_scroller {\
  background-color: #002451;\
}\
\
.ace-tomorrow-night-blue .ace_text-layer {\
  cursor: text;\
  color: #FFFFFF;\
}\
\
.ace-tomorrow-night-blue .ace_cursor {\
  border-left: 2px solid #FFFFFF;\
}\
\
.ace-tomorrow-night-blue .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #FFFFFF;\
}\
 \
.ace-tomorrow-night-blue .ace_marker-layer .ace_selection {\
  background: #003F8E;\
}\
\
.ace-tomorrow-night-blue .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-tomorrow-night-blue .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid #404F7D;\
}\
\
.ace-tomorrow-night-blue .ace_marker-layer .ace_active_line {\
  background: #00346E;\
}\
\
       \
.ace-tomorrow-night-blue .ace_invisible {\
  color: #404F7D;\
}\
\
.ace-tomorrow-night-blue .ace_keyword {\
  color:#EBBBFF;\
}\
\
.ace-tomorrow-night-blue .ace_keyword.ace_operator {\
  color:#99FFFF;\
}\
\
.ace-tomorrow-night-blue .ace_constant {\
  \
}\
\
.ace-tomorrow-night-blue .ace_constant.ace_language {\
  color:#FFC58F;\
}\
\
.ace-tomorrow-night-blue .ace_constant.ace_library {\
  \
}\
\
.ace-tomorrow-night-blue .ace_constant.ace_numeric {\
  color:#FFC58F;\
}\
\
.ace-tomorrow-night-blue .ace_invalid {\
  color:#FFFFFF;\
background-color:#F99DA5;\
}\
\
.ace-tomorrow-night-blue .ace_invalid.ace_illegal {\
  \
}\
\
.ace-tomorrow-night-blue .ace_invalid.ace_deprecated {\
  color:#FFFFFF;\
background-color:#EBBBFF;\
}\
\
.ace-tomorrow-night-blue .ace_support {\
  \
}\
\
.ace-tomorrow-night-blue .ace_support.ace_function {\
  color:#BBDAFF;\
}\
\
.ace-tomorrow-night-blue .ace_function.ace_buildin {\
  \
}\
\
.ace-tomorrow-night-blue .ace_string {\
  color:#D1F1A9;\
}\
\
.ace-tomorrow-night-blue .ace_string.ace_regexp {\
  color:#FF9DA4;\
}\
\
.ace-tomorrow-night-blue .ace_comment {\
  color:#7285B7;\
}\
\
.ace-tomorrow-night-blue .ace_comment.ace_doc {\
  \
}\
\
.ace-tomorrow-night-blue .ace_comment.ace_doc.ace_tag {\
  \
}\
\
.ace-tomorrow-night-blue .ace_variable {\
  color:#FF9DA4;\
}\
\
.ace-tomorrow-night-blue .ace_variable.ace_language {\
  \
}\
\
.ace-tomorrow-night-blue .ace_xml_pe {\
  \
}\
\
.ace-tomorrow-night-blue .ace_meta {\
  \
}\
\
.ace-tomorrow-night-blue .ace_meta.ace_tag {\
  color:#FF9DA4;\
}\
\
.ace-tomorrow-night-blue .ace_meta.ace_tag.ace_input {\
  \
}\
\
.ace-tomorrow-night-blue .ace_entity.ace_other.ace_attribute-name {\
  color:#FF9DA4;\
}\
\
.ace-tomorrow-night-blue .ace_markup.ace_underline {\
    text-decoration:underline;\
}\
\
.ace-tomorrow-night-blue .ace_markup.ace_heading {\
  color:#D1F1A9;\
}\
\
.ace-tomorrow-night-blue .ace_markup.ace_heading.ace_1 {\
  \
}\
\
.ace-tomorrow-night-blue .ace_markup.ace_heading.ace_2 {\
  \
}\
\
.ace-tomorrow-night-blue .ace_markup.ace_heading.ace_3 {\
  \
}\
\
.ace-tomorrow-night-blue .ace_markup.ace_heading.ace_4 {\
  \
}\
\
.ace-tomorrow-night-blue .ace_markup.ace_heading.ace_5 {\
  \
}\
\
.ace-tomorrow-night-blue .ace_markup.ace_heading.ace_6 {\
  \
}\
\
.ace-tomorrow-night-blue .ace_markup.ace_list {\
  \
}\
\
.ace-tomorrow-night-blue .ace_collab.ace_user1 {\
     \
}\
";

    // import CSS once
    dom.importCssString(cssText);

    exports.cssClass = "ace-tomorrow-night-blue";
});
