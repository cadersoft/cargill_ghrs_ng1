

//creating shortcut for less verbose code
var scorm = pipwerks.SCORM;
var scormBroker = {
    StartTime: null,
    Init: function (sVersion) {
        scorm.version = sVersion;
        this.StartTime = new Date();
        //Trace.Msg("Initializing SCORM.");
        var callSucceeded = scorm.init();
        if (!callSucceeded) {
            //Trace.Msg("M Get API");
            scorm.API.handle = scorm.API.get();
            scorm.connection.isActive = true;
        }
        //Trace.Msg("Initializing succeeded? " +callSucceeded);
    },
    Set: function (param, value) {
        //Trace.Msg("Sending: '" +value +"'");
        var callSucceeded = scorm.set(param, value);
        //Trace.Msg("Call succeeded? " +callSucceeded);
    },
    Get: function (param) {
        var value = scorm.get(param);
        //Trace.Msg("Received: '" +value +"'");
        return value;
    },
    Complete: function (value) {
        var success;
        //Trace.Msg("Setting course status .");
        console.log("SCORM:" + scorm.version + " - "+ value);
        switch (scorm.version) {
            case "1.2": success = scorm.set("cmi.core.lesson_status", value); break;
            case "2004": success = scorm.set("cmi.completion_status", value); break;
        }
        //Trace.Msg("Call succeeded? " +success);
    },
    SessionTime: function () {
        var success, timeSpan;
        //Trace.Msg("Setting course session time.");
        timeSpan = GetSessionTime(this.StartTime, new Date());
        switch (scorm.version) {
            case "1.2": success = scorm.set("cmi.core.session_time", timeSpan); break;
            case "2004": success = scorm.set("cmi.session_time", timeSpan); break;
        }
        //Trace.Msg("Call succeeded? " +success);
    },
    Score: function (Raw) {
        var success;
        //Trace.Msg("Setting course score.");
        switch (scorm.version) {
            case "1.2":
                success = scorm.set("cmi.core.score.min", "0");
                success = scorm.set("cmi.core.score.max", "100");
                success = scorm.set("cmi.core.score.raw", Raw.toString());
                break;
            case "2004":
                success = scorm.set("cmi.score.scaled", (Raw / 100).toString());
                success = scorm.set("cmi.score.min", "0");
                success = scorm.set("cmi.score.max", "100");
                success = scorm.set("cmi.score.raw", Raw.toString());
                break;
        }
        //Trace.Msg("Call succeeded? " +success);
    },
    SuccessStatus: function (Raw, Min) {
        var success;
        //Trace.Msg("Setting course Success Status.");

        switch (scorm.version) {
            case "1.2":
                break;
            case "2004":
                if (Raw >= Min) success = scorm.set("cmi.success_status", "passed");
                else success = scorm.set("cmi.success_status", "failed");
                break;
        }
        //Trace.Msg("Call succeeded? " +success);
    },
    Location: function (sLocation) {
        var success;
        //Trace.Msg("Setting course location.");

        switch (scorm.version) {
            case "1.2":
                success = scorm.set("cmi.core.lesson_location", sLocation);
                break;
            case "2004":
                success = scorm.set("cmi.location", sLocation);
                break;
        }
        //Trace.Msg("Call succeeded? " +success);
    },
    BookVal: function (bookmark_val) {
        var success;
        //Trace.Msg("Setting course location.");

        switch (scorm.version) {
            case "1.2":
                success = scorm.set("objectives._count", bookmark_val);
                break;
            case "2004":
                success = scorm.set("objectives._count", bookmark_val);
                break;
        }
        //Trace.Msg("Call succeeded? " +success);
    },
    SuspendData: function (lastCount) {
        var success;
        //Trace.Msg("Setting course Suspend Data.");

        switch (scorm.version) {
            case "1.2":
                success = scorm.set("cmi.suspend_data", lastCount);
                break;
            case "2004":
                success = scorm.set("cmi.suspend_data", lastCount);
                break;
        }
        //Trace.Msg("Call succeeded? " +success);
    },
    GetSuspendData: function (sData) {
        var success;
        switch (scorm.version) {
            case "1.2":
                success = scorm.get("cmi.suspend_data");
                break;
            case "2004":
                success = scorm.get("cmi.suspend_data");
                break;
        }

        return success;
    },
    Resume: function () {
        /*var sMode = scorm.get("cmi.mode");

        var sLocation = '';
        if (sMode == "browse" || sMode == "review" || sMode == "teacher" || sMode == "instructor" || sMode == "author") {
            // code for teacher 
        }
        else {
            // code for student
        }*/
        switch (scorm.version) {
            case "1.2":
                sLocation = scorm.get("cmi.core.lesson_location");
				lastCount = scorm.get("cmi.suspend_data");
				raw_pre = scorm.get("cmi.core.score.raw");
				bookmark_val = scorm.get("objectives._count");
				 
                break;
            case "2004":
                sLocation = scorm.get("cmi.location");
				lastCount = scorm.get("cmi.suspend_data");
				raw_pre = scorm.get("cmi.score.raw");
				bookmark_val = scorm.get("objectives._count");
                break;
        }
        return sLocation;
    },
    End: function () {
        //Trace.Msg("Terminating connection.");
        var callSucceeded = scorm.quit();
        //Trace.Msg("Call succeeded? " +callSucceeded);
    },
    Save: function () {
        //Trace.Msg("Commit.");
        var callSucceeded = scorm.save();
        //Trace.Msg("Call succeeded? " +callSucceeded);
    }

};

function GetSessionTime(StartTime, EndTime) {
    var timeSpan, oNowTime, oStartTime;
    oStartTime = StartTime;
    if (oStartTime != null) {
        oNowTime = EndTime;

        var StartH = oStartTime.getHours();
        var StartM = oStartTime.getMinutes();
        var StartS = oStartTime.getSeconds();

        var NowH = oNowTime.getHours();
        var NowM = oNowTime.getMinutes();
        var NowS = oNowTime.getSeconds();

        var ElapsedH = NowH - StartH;
        var ElapsedM = NowM - StartM;
        var ElapsedS = NowS - StartS;

        if (ElapsedH < 0) ElapsedH = "0";
        if (ElapsedM < 0) ElapsedM = "0";
        if (ElapsedS < 0) ElapsedS = "0";

        if (ElapsedH < 10) ElapsedH = "0" + ElapsedH;
        if (ElapsedM < 10) ElapsedM = "0" + ElapsedM;
        if (ElapsedS < 10) ElapsedS = "0" + ElapsedS;

        switch (scorm.version) {
            case "1.2":
                timeSpan = ElapsedH + ":" + ElapsedM + ":" + ElapsedS;
                break;
            case "2004":
                timeSpan = "PT" + ElapsedH + "H" + ElapsedM + "M" + ElapsedS + "S";
                break;
        }

        return timeSpan;
    }

};