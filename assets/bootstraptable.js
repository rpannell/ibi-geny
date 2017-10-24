function escapeHtml(text) {
    var div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
}

function GetDataUlr(){
    var url = "";
    var area = $("#txtArea").val();
    var controller = $("#txtController").val();
    var action = $("#txtAction").val();

    return (area != "" ? ("/" + area) : "") + (controller != "" ? ("/" + controller) : "") + (action != "" ? ("/" + action) : "")
}

function CreateTable(){
    console.log("bing");
    var data = "";
    if($("#chkToolbar").is(":checked")){
        data += "<div id=\"custom-toolbar\">" + "\n";
        data += "   <button class=\"btn btn-primary\" id=\"btnNew\" style=\"margin-bottom: 10px;margin-top: 10px;\">" + "\n";
        data += "       <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\" style=\"margin-right: 5px;\"></span>New" + "\n";
        data += "   </button>" + "\n";
        data += "</div>" + "\n";
    }
    data += "<table id=\"" + $("#txtTableId").val() + "\"" + "\n";
    data += "       class=\"table table-striped\"" + "\n";
    if($("#chkServerSidePaging").is(":checked")){
        data += "       data-side-pagination=\"server\"" + "\n";
        data += "       data-page-size=\"20\"" + "\n";
        data += "       data-url=\"" + GetDataUlr() + "\"" + "\n";
    }
    if($("#chkToolbar").is(":checked")){
        data += "       data-toolbar=\"#custom-toolbar\"" + "\n";
    }
    if($("#chkSearch").is(":checked")){
        data += "       data-search=\"true\"" + "\n";
    }
    if($("#chkExport").is(":checked")){
        data += "       data-show-export=\"true\"" + "\n";
    }
    if($("#chkShowColumns").is(":checked")){
        data += "       data-show-columns=\"true\"" + "\n";
    }
    if($("#chkRefresh").is(":checked")){
        data += "       data-show-refresh=\"true\"" + "\n";
    }        
    if($("#chkDetails").is(":checked")){
        data += "       data-detail-view=\"true\"" + "\n";
        data += "       data-detail-formatter=\"DetailFormatter\"" + "\n";
    }        
    data += "       data-query-params=\"SearchParams\"" + "\n";
    data += "       data-toggle=\"table\">" + "\n";
    data += "   <thead>" + "\n";
    data += "       <tr>" + "\n";
    data += "" + "\n";
    data += "" + "\n";
    data += "" + "\n";
    if($("#chkOperations").is(":checked")){
        data += "           <th data-halign=\"center\" data-align=\"center\" data-valign=\"middle\" data-field=\"Actions\" data-formatter=\"OperateFormatter\" data-events=\"operateEvents\">Actions</th>" + "\n";
    }
    data += "       </tr>" + "\n";
    data += "   </thead>" + "\n";
    data += "</table>" + "\n";
    data += "<script>" + "\n";
    data += "   //Used to alter search params before sending data to the controller." + "\n";
    data += "   function SearchParams(params) {" + "\n";
    data += "       return params;" + "\n";
    data += "   }" + "\n";
    if($("#chkDetails").is(":checked")){
        data += "   //Used to display data when a row is expanded." + "\n";
        data += "   function DetailFormatter(index, row, element) {" + "\n";
        data += "       return 'This is code generated by the DetailFormatter Javascript function found in the View';" + "\n";
        data += "   }" + "\n";
    }
    if($("#chkOperations").is(":checked")){
        data += "   var operateEvents = {" + "\n";
        data += "       'click .edit_btn': function (e, value, row, index) {" + "\n";
        data += "           //EDIT BUTTON FUNCTION GOES HERE" + "\n";
        data += "       }," + "\n";
        data += "       'click .delete_btn': function (e, value, row, index) {" + "\n";
        data += "           //DELETE BUTTON FUNCTION GOES HERE" + "\n";
        data += "       }" + "\n";
        data += "       //MORE CLICK ACTION CAN BE DETECTED HERE" + "\n";
        data += "   };" + "\n";
        data += "   function OperateFormatter(index, row, element) {" + "\n";
        data += "       return [" + "\n";
        data += "           '<div class=\"btn-group\">' +" + "\n";
        data += "               '<button type=\"button\" class=\"btn btn-default edit_btn\">Edit</button>' +" + "\n";
        data += "               '<button type=\"button\" class=\"btn btn-default delete_btn\">Delete</button>' +" + "\n";
        data += "               //MORE CAN BE ADDED HERE" + "\n";
        data += "           '</div>'" + "\n";
        data += "       ].join('');" + "\n";
        data += "   }" + "\n";
    }
    data += "</script>" + "\n";
    //data += "" + "\n";
    $("#codeBlock").empty();
    $("#codeBlock").html(escapeHtml(data));
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
}

require("./js/highlight.pack.js");
$(document).ready(function () {
    $("#btnTemplateOptions").click(function () {
        $(".content").load("options.html");
    });

    $('ul.tabs').tabs();
    CreateTable();
    $("input").change(function(){
        CreateTable();
    });
});