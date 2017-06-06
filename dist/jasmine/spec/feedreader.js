"use strict";$(function(){describe("RSS Feeds",function(){it("are defined",function(){expect(allFeeds).toBeDefined(),expect(allFeeds.length).not.toBe(0)}),it("have Urls",function(){for(var e=0;e<allFeeds.length;e++)expect(allFeeds[e].url).toBeDefined(),expect(allFeeds[e].url.length>0).toBe(!0)}),it("have names",function(){for(var e=0;e<allFeeds.length;e++)expect(allFeeds[e].name).toBeDefined(),expect(allFeeds[e].name.length>0).toBe(!0)})}),describe("The menu",function(){it("is hidden by default",function(){expect("menu-hidden"===$("body").attr("class")).toBe(!0)}),it("toggles when clicked",function(){$(".menu-icon-link").click(),expect("menu-hidden"===$("body").attr("class")).toBe(!1),$(".menu-icon-link").click(),expect("menu-hidden"===$("body").attr("class")).toBe(!0)})}),describe("Initial Entries",function(){beforeEach(function(e){loadFeed(0,function(){e()})}),it("have at least one entry element within the feed container",function(e){expect($(".feed").find(".entry").length>0).toBe(!0),e()})}),describe("New Feed Selection",function(){var e,t;beforeEach(function(n){$(".feed").empty(),loadFeed(0,function(){e=$(".feed").find(".entry:first").text()}),loadFeed(1,function(){t=$(".feed").find(".entry:first").text(),n()})}),it("loads new content on the next feed",function(n){expect(t!=e).toBe(!0),n()})})}());