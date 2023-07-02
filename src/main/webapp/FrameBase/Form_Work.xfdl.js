(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInput", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">quoc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tranction", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"role\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button01","610","70","88","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("search by name");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","Button01:27","70","85","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Load All");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","190","115","620","290",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_tranction");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"147\"/><Column size=\"161\"/><Column size=\"128\"/><Column size=\"102\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"name\"/><Cell col=\"2\" text=\"age\"/><Cell col=\"3\" text=\"address\"/><Cell col=\"4\" text=\"role\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:age\"/><Cell col=\"3\" text=\"bind:address\"/><Cell col=\"4\" text=\"bind:role\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.ds_tranction.clear();
        	var id = "getAll";
             var url = "http://localhost:8080/employee";
             var reqDs = "";
             var respDs = "ds_tranction=IDDataset";
             var args = "";
             var callback = "received";

             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        this.initdata_received = function(id, code, message)
        {
             if (code == 0) {
                  this.alert(this.ds_gridExpr.rowcount + " numbers of data have been found.");
                  trace(this.ds_gridExpr.rowcount + " numbers of data have been found.");
             } else {

                  this.alert("Error["+code+"]:"+message);
                  trace("Error["+code+"]:"+message);
             }
        }
        this.Button01_onclick = function(obj,e)
        {
        	this.ds_tranction.clearData();
        	 var id = "search";
             var url = "http://localhost:8080/employee/search";
             var reqDs = "dsInput=dsInput";
             var respDs = "ds_tranction=IDDataset";
             var args = "";
             var callback = "received";

             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
