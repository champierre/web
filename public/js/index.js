!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var APPLICATION_ID,JAVASCRIPT_KEY;APPLICATION_ID="GZX10yymwvZ04FPaMcsYI0A5Cq6hjP1wG6EuNQGu",JAVASCRIPT_KEY="K17c6ZzNaWNjFlMKFO3SumyxGargCzl6fmQlCEfP",Parse.initialize(APPLICATION_ID,JAVASCRIPT_KEY),angular.module("app",[]).controller("MeetupController",require("./ng/controller/MeetupController")).controller("MentorController",require("./ng/controller/MentorController"))},{"./ng/controller/MeetupController":2,"./ng/controller/MentorController":3}],2:[function(require,module,exports){var Meetup;Meetup=require("../../parse/class/Meetup"),module.exports=function($scope,$http){var yesterday;return $scope.loaded=!1,$scope.upcomings=[],(yesterday=new Date).setDate(yesterday.getDate()-1),new Parse.Query(Meetup).greaterThan("start_time",yesterday).ascending("start_time").find().then(function(result){var row;return $scope.upcomings=function(){var i,len,results;for(results=[],i=0,len=result.length;len>i;i++)row=result[i],results.push(row.attributes);return results}(),$scope.loaded=!0,$scope.$apply()})}},{"../../parse/class/Meetup":4}],3:[function(require,module,exports){var Mentor;Mentor=require("../../parse/class/Mentor"),module.exports=function($scope,$http){return $scope.loaded=!1,$scope.mentors=[],new Parse.Query(Mentor).ascending("order").find().then(function(result){var row;return $scope.mentors=function(){var i,len,results;for(results=[],i=0,len=result.length;len>i;i++)row=result[i],results.push(row.attributes);return results}(),$scope.loaded=!0,$scope.$apply()})}},{"../../parse/class/Mentor":5}],4:[function(require,module,exports){module.exports=Parse.Object.extend("Meetup",{initialize:function(attrs){return attrs&&this.setValues(attrs),this},setValues:function(attrs){var ref,ref1,ref2;return(null!=attrs.source||null!=attrs.id)&&this.set("source",attrs.source||attrs.id),null!=attrs.name&&this.set("name",attrs.name),null!=attrs.location&&this.set("location",attrs.location),((null!=(ref=attrs.venue)?ref.id:void 0)||attrs.venue_id)&&this.set("venue_id",(null!=(ref1=attrs.venue)?ref1.id:void 0)||attrs.venue_id),null!=attrs.description&&this.set("description",attrs.description),null!=attrs.start_time&&("string"==typeof attrs.start_time?this.set("start_time",new Date(attrs.start_time)):this.set("start_time",attrs.start_time)),null!=attrs.end_time&&("string"==typeof attrs.end_time?this.set("end_time",new Date(attrs.end_time)):this.set("end_time",attrs.end_time)),null!=(null!=(ref2=attrs.cover)?ref2.source:void 0)&&this.set("cover_source",attrs.cover.source),this}})},{}],5:[function(require,module,exports){module.exports=Parse.Object.extend("Mentor",{initialize:function(attrs){return attrs&&this.setValues(attrs),this},setValues:function(attrs){return(null!=attrs.source||null!=attrs.id)&&this.set("source",attrs.source||attrs.id),null!=attrs.last_name&&this.set("last_name",attrs.last_name),null!=attrs.first_name&&this.set("first_name",attrs.first_name),null!=attrs.description&&this.set("description",attrs.description),null!=attrs.last_attended&&("string"==typeof attrs.last_attended?this.set("last_attended",new Date(attrs.last_attended)):this.set("last_attended",attrs.last_attended)),this}})},{}]},{},[1]);