//Setup module to run Behave tests
require('behave').andSetup(this);

describe('SQLREST: create a model', function() {
	it.eventually('*** creates a new model', function(done) {
		var model = Alloy.createModel('events', {
            end : "2013-11-25T19:15:00.000-06:00",
			start : "2013-11-25T18:30:00.000-06:00",
            title : "Group Class \(All ages, all ranks\)",
            details : "something",
            authorName : "genamex@gmail.com",
            authorEmail : "genamex@gmail.com"
		});
		model.save({}, {
			success : function(returnModel) {
				// get model back from db
				Ti.API.info("callback");
				model.set({
					"id" : returnModel.id
				});

				it.eventually('*** create - callback the new model', function(_done) {
					model.fetch({
						success: function(_returnModel){
							expect(model.id).notToBe(null);
							expect(model.id).toBe(_returnModel.id);
							expect(model.get("authorName")).toBe('genamex@gmail.com');
							expect(model.get("authorEmail")).toBe("genamex@gmail.com");

							_done();
						},
						error: function(_returnModel){
							Ti.API.error("fetch error");
							expect(model.id).notToBe(null);
							expect(model.id).toBe(_returnModel.id);
							expect(model.get("authorName")).toBe('genamex@gmail.com');
							expect(model.get("authorEmail")).toBe("genamex@gmail.com");

							_done();
						}
					});
				}, 10000);

				done();
			},
			error : function(returnModel) {
				//on error - the data is only saved to local db
				Ti.API.debug("create model: error callback");
				model.set({
					"id" : returnModel.id
				});

				it.eventually('*** create - callback the model', function(_done) {
					model.fetch({
						success: function(_returnModel){
							expect(model.id).notToBe(null);
							expect(model.id).toBe(_returnModel.id);
							expect(model.get("authorName")).toBe('genamex@gmail.com');
							expect(model.get("authorEmail")).toBe("genamex@gmail.com");

							_done();
						},
						error: function(_returnModel){
							Ti.API.error("fetch error");
							expect(model.id).notToBe(null);
							expect(model.id).toBe(_returnModel.id);
							expect(model.get("authorName")).toBe('genamex@gmail.com');
							expect(model.get("authorEmail")).toBe("genamex@gmail.com");

							_done();
						}
					});
				}, 10000);

				done();
			}
		});
	}, 10000);
});


describe('SQLREST: create and update a model', function() {
	it.eventually('*** creates a new model to update', function(done) {
		var model = Alloy.createModel('events', {
			end: "2013-11-26T17:15:00.000-06:00",
    		startTime: "2013-11-26T16:30:00.000-06:00",
			title : "Little Champions \(Ages 4-7\)",
            details : "something else",
            authorName : "genamex@gmail.com",
            authorEmail : "genamex@gmail.com"
		});
		model.save({}, {
			success : function(returnModel) {
				// get model back from db
				Ti.API.info("callback");
				model.set({
					"id" : returnModel.id
				});

				it.eventually('*** create - callback the model to update', function(_done) {
					model.fetch({
						success: function(_returnModel){
							expect(model.id).notToBe(null);
							expect(model.id).toBe(returnModel.id);
							expect(model.get("authorName")).toBe('genamex@gmail.com');
							expect(model.get("authorEmail")).toBe("genamex@gmail.com");

							//UPDATE the model
							it.eventually('*** updates the created model', function(_donedone) {
								var model = Alloy.createModel('events', {
									id : returnModel.id, //when ID is defined, backbone will update rather than create
									end: "2013-11-26T17:15:00.000-06:00",
						    		start: "2013-11-26T16:30:00.000-06:00",
									title : "Little Champions \(Ages 4-7\)",
						            details : "something else",
						            authorName : "genamex@gmail.com",
						            authorEmail : "genamex@gmail.com"
								});

								model.save({}, {
									success : function(_returnModel2) {
										expect(model.id).notToBe(null);
										expect(model.id).toBe(_returnModel2.id);
										expect(model.get("end")).toBe('2013-11-26T17:15:00.000-06:00');
										expect(model.get("start")).toBe("2013-11-26T16:30:00.000-06:00");
										expect(model.get("title")).toBe("Little Champions \(Ages 4-7\)");
										_donedone();
									},
									error : function(_returnModel2) {
										expect(model.id).notToBe(null);
										expect(model.id).toBe(_returnModel2.id);
										expect(model.get("end")).toBe('2013-11-26T17:15:00.000-06:00');
										expect(model.get("start")).toBe("2013-11-26T16:30:00.000-06:00");
										expect(model.get("title")).toBe("Little Champions \(Ages 4-7\)");
										_donedone();
									}
								});

							}, 10000);

							_done();
						},
						error: function(_returnModel){
							Ti.API.error("fetch error");
							// validate it
							expect(model.id).notToBe(null);
							expect(model.id).toBe(returnModel.id);
							expect(model.get("authorName")).toBe('genamex@gmail.com');
							expect(model.get("authorEmail")).toBe("genamex@gmail.com");

							//UPDATE the model
							it.eventually('*** updates the created model', function(_donedone) {
								var model = Alloy.createModel('events', {
									id : returnModel.id, //when ID is defined, backbone will update rather than create
									end: "2013-11-26T17:15:00.000-06:00",
						    		start: "2013-11-26T16:30:00.000-06:00",
									title : "Little Champions \(Ages 4-7\)",
						            details : "something else",
						            authorName : "genamex@gmail.com",
						            authorEmail : "genamex@gmail.com"
								});

								model.save({}, {
									success : function(_returnModel2) {
										expect(model.id).notToBe(null);
										expect(model.id).toBe(_returnModel2.id);
										expect(model.get("end")).toBe('2013-11-26T17:15:00.000-06:00');
										expect(model.get("start")).toBe("2013-11-26T16:30:00.000-06:00");
										expect(model.get("title")).toBe("Little Champions \(Ages 4-7\)");
										_donedone();
									},
									error : function(_returnModel2) {
										expect(model.id).notToBe(null);
										expect(model.id).toBe(_returnModel2.id);
										expect(model.get("end")).toBe('2013-11-26T17:15:00.000-06:00');
										expect(model.get("start")).toBe("2013-11-26T16:30:00.000-06:00");
										expect(model.get("title")).toBe("Little Champions \(Ages 4-7\)");
										_donedone();
									}
								});

							}, 10000);

							_done();
						}
					});
				}, 10000);

				done();
			},
			error : function(returnModel) {
				//on error - the data is only saved to local db
				Ti.API.debug("create model: error callback");
				// get model back from db
				model.set({
					"id" : returnModel.id
				});

				it.eventually('*** create - callback the model', function(_done) {
					model.fetch({
						success: function(_returnModel){
							expect(model.id).notToBe(null);
							expect(model.id).toBe(returnModel.id);
							expect(model.get("authorName")).toBe('genamex@gmail.com');
							expect(model.get("authorEmail")).toBe("genamex@gmail.com");

							//UPDATE the model
							it.eventually('*** updates the created model', function(_donedone) {
								var model = Alloy.createModel('events', {
									id : returnModel.id, //when ID is defined, backbone will update rather than create
									end: "2013-11-26T17:15:00.000-06:00",
						    		start: "2013-11-26T16:30:00.000-06:00",
									title : "Little Champions \(Ages 4-7\)",
						            details : "something else",
						            authorName : "genamex@gmail.com",
						            authorEmail : "genamex@gmail.com"
								});

								model.save({}, {
									success : function(_returnModel2) {
										expect(model.id).notToBe(null);
										expect(model.id).toBe(_returnModel2.id);
										expect(model.get("end")).toBe('2013-11-26T17:15:00.000-06:00');
										expect(model.get("start")).toBe("2013-11-26T16:30:00.000-06:00");
										expect(model.get("title")).toBe("Little Champions \(Ages 4-7\)");
										_donedone();
									},
									error : function(_returnModel2) {
										expect(model.id).notToBe(null);
										expect(model.id).toBe(_returnModel2.id);
										expect(model.get("end")).toBe('2013-11-26T17:15:00.000-06:00');
										expect(model.get("start")).toBe("2013-11-26T16:30:00.000-06:00");
										expect(model.get("title")).toBe("Little Champions \(Ages 4-7\)");
										_donedone();
									}
								});

							}, 10000);

							_done();
						},
						error: function(_returnModel){
							Ti.API.error("fetch error");
							// validate it
							expect(model.id).notToBe(null);
							expect(model.id).toBe(returnModel.id);
							expect(model.get("authorName")).toBe('genamex@gmail.com');
							expect(model.get("authorEmail")).toBe("genamex@gmail.com");

							//UPDATE the model
							it.eventually('*** updates the created model', function(_donedone) {
								var model = Alloy.createModel('events', {
									id : returnModel.id, //when ID is defined, backbone will update rather than create
									end: "2013-11-26T17:15:00.000-06:00",
						    		start: "2013-11-26T16:30:00.000-06:00",
									title : "Little Champions \(Ages 4-7\)",
						            details : "something else",
						            authorName : "genamex@gmail.com",
						            authorEmail : "genamex@gmail.com"
								});

								model.save({}, {
									success : function(_returnModel2) {
										expect(model.id).notToBe(null);
										expect(model.id).toBe(_returnModel2.id);
										expect(model.get("end")).toBe('2013-11-26T17:15:00.000-06:00');
										expect(model.get("start")).toBe("2013-11-26T16:30:00.000-06:00");
										expect(model.get("title")).toBe("Little Champions \(Ages 4-7\)");
										_donedone();
									},
									error : function(_returnModel2) {
										expect(model.id).notToBe(null);
										expect(model.id).toBe(_returnModel2.id);
										expect(model.get("end")).toBe('2013-11-26T17:15:00.000-06:00');
										expect(model.get("start")).toBe("2013-11-26T16:30:00.000-06:00");
										expect(model.get("title")).toBe("Little Champions \(Ages 4-7\)");
										_donedone();
									}
								});

							}, 10000);

							_done();
						}
					});
				}, 10000);

				done();
			}
		});
	}, 10000);
});


describe('SQLREST: find models', function() {
	it.eventually('*** fetches all models', function(done) {
		var collection = Alloy.createCollection('events');
		collection.fetch({
			success:function(models){
				expect(collection).notToBe(null);
				expect(collection.length).toBe(2); //this does not need to be true. Depends on your remote server

				//clean up after test
				for (var j = 0; j < collection.length; j++) {
					collection.at(j).destroy();
				}

				done();
			},
			error:function(){
				expect(collection).notToBe(null);
				expect(collection.length).toBe(2); //this does not need to be true. Depends on your remote server

				//clean up after test
				for (var j = 0; j < collection.length; j++) {
					collection.at(j).destroy();
				}

				done();
			}
		});
	}, 10000);
});
