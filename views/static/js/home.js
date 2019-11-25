$( document ).ready(function() {

    //on page load keep the user list populated------------START
    $.ajax({
        url: "hotels/list",
        dataType: "json",
    })
    .done((data) => {
        if(data) {
            console.log("data")
            console.log(data)

            var odata = $.parseJSON(JSON.stringify(data.docs));
            odata.forEach(item => {
                $('#myTableHotel > tbody:last-child').append(getRowHtmlHotel(item));
            });
        }
    })
    .fail((err) => {
        console.log("Error");
    });  
    //-------------------------------------------------------END
        // //on page load keep the analisys list populated------------START
        // $.ajax({
        //     url: "analisys/list",
        //     dataType: "json",
        // })
        // .done((data) => {
        //     if(data) {
        //         var odata = $.parseJSON(JSON.stringify(data.docs));
        //         odata.forEach(item => {
        //             $('#myTableAnalisys > tbody:last-child').append(getRowHtmlAnalisys(item));
        //         });
        //     }
        // })
        // .fail((err) => {
        //     console.log("Error");
        // });  
        // //-------------------------------------------------------END
        //         //on page load keep the videos list populated------------START
        //         $.ajax({
        //             url: "videos/list",
        //             dataType: "json",
        //         })
        //         .done((data) => {
        //             if(data) {
        //                 var odata = $.parseJSON(JSON.stringify(data.docs));
        //                 odata.forEach(item => {
        //                     $('#myTableVideos > tbody:last-child').append(getRowHtmlVideos(item));
        //                 });
        //             }
        //         })
        //         .fail((err) => {
        //             console.log("Error");
        //         });  
        //         //-------------------------------------------------------END
        //         //on page load keep the news list populated------------START
        //         $.ajax({
        //             url: "news/list",
        //             dataType: "json",
        //         })
        //         .done((data) => {
        //             if(data) {
        //                 var odata = $.parseJSON(JSON.stringify(data.docs));
        //                 odata.forEach(item => {
        //                     $('#myTableNews > tbody:last-child').append(getRowHtmlNews(item));
        //                 });
        //             }
        //         })
        //         .fail((err) => {
        //             console.log("Error");
        //         });  
        //         //-------------------------------------------------------END

    //on add user submit the form----------------------------START
    $("#btnSubmitHotel").click (() => {
        $("#addHotelForm").submit();
    });

	$(document).on("submit", '#addHotelForm', function(event) {
		event.preventDefault(); 
		var $form = $(this);
		
        $.ajax({
            url: 'hotels/add',
            data: $form.serializeArray(),
            type: 'POST'
        })
        .done((data) => {
            if(data) {
                var odata = $.parseJSON(JSON.stringify(data.docs));
                odata.forEach(item => {
                    $('#myTableHotel > tbody:last-child').append(getRowHtmlHotel(item));
                });
                $('#addHotelForm').trigger("reset");
            }
        })
        .fail((err) => {
            console.log("Error");
        });
    });	  
    //-------------------------------------------------------END
       
    // $("#btnSubmitAnalisys").click (() => {
    //     $("#addAnalisysForm").submit();
    // });

	// $(document).on("submit", '#addAnalisysForm', function(event) {
	// 	event.preventDefault(); 
	// 	var $form = $(this);
		
    //     $.ajax({
    //         url: 'analisys/add',
    //         data: $form.serializeArray(),
    //         type: 'POST'
    //     })
    //     .done((data) => {
    //         if(data) {
    //             var odata = $.parseJSON(JSON.stringify(data.docs));
    //             odata.forEach(item => {
    //                 $('#myTableAnalisys > tbody:last-child').append(getRowHtmlAnalisys(item));
    //             });
    //             $('#addAnalisysForm').trigger("reset");
    //         }
    //     })
    //     .fail((err) => {
    //         console.log("Error");
    //     });
    // });	  
    // //-------------------------------------------------------END
           
    // $("#btnSubmitVideo").click (() => {
    //     $("#addVideoForm").submit();
    // });

	// $(document).on("submit", '#addVideoForm', function(event) {
	// 	event.preventDefault(); 
	// 	var $form = $(this);
		
    //     $.ajax({
    //         url: 'videos/add',
    //         data: $form.serializeArray(),
    //         type: 'POST'
    //     })
    //     .done((data) => {
    //         if(data) {
    //             var odata = $.parseJSON(JSON.stringify(data.docs));
    //             odata.forEach(item => {
    //                 $('#myTableVideos > tbody:last-child').append(getRowHtmlVideos(item));
    //             });
    //             $('#addVideoForm').trigger("reset");
    //         }
    //     })
    //     .fail((err) => {
    //         console.log("Error");
    //     });
    // });	  
    // //-------------------------------------------------------END
	//     //on add new submit the form----------------------------START
    //     $("#btnSubmitNew").click (() => {
    //         $("#addNewForm").submit();
    //     });
    
    //     $(document).on("submit", '#addNewForm', function(event) {
    //         event.preventDefault(); 
    //         var $form = $(this);
            
    //         $.ajax({
    //             url: 'news/add',
    //             data: $form.serializeArray(),
    //             type: 'POST'
    //         })
    //         .done((data) => {
    //             if(data) {
    //                 var odata = $.parseJSON(JSON.stringify(data.docs));
    //                 odata.forEach(item => {
    //                     $('#myTableNews > tbody:last-child').append(getRowHtmlNews(item));
    //                 });
    //                 $('#addNewForm').trigger("reset");
    //             }
    //         })
    //         .fail((err) => {
    //             console.log("Error");
    //         });
    //     });	  
    //     //-------------------------------------------------------END
	  
    //    //-------------------------------------------------------END
	//     //on add movie submit the form----------------------------START
    //     $("#btnSubmitMovie").click (() => {
    //         $("#addMovieForm").submit();
    //     });
    
    //     $(document).on("submit", '#addMovieForm', function(event) {
    //         event.preventDefault(); 
    //         var $form = $(this);
            
    //         $.ajax({
    //             url: 'movies/add',
    //             data: $form.serializeArray(),
    //             type: 'POST'
    //         })
    //         .done((data) => {
    //             if(data) {
    //                 var odata = $.parseJSON(JSON.stringify(data.docs));
    //                 odata.forEach(item => {
    //                     $('#myTableMovie > tbody:last-child').append(getRowHtmlMovie(item));
    //                 });
    //                 $('#addNewForm').trigger("reset");
    //             }
    //         })
    //         .fail((err) => {
    //             console.log("Error");
    //         });
    //     });	  
    //     //-------------------------------------------------------END
	  
    //on click of delete record for movies----------------------------START
    $(document).on("click", ".btn-del-hotel", function(event) { 

        //identify the row which we will remove from our table.
        var row = $(this).parent().parent();

        $.ajax({
            url: 'hotels/delete',
            data: { id:this.id },
            type: 'POST'
        })
        .done((data) => {
            if(data) {
               console.log(data);
               row.remove();
            }
        })
        .fail((err) => {
            console.log("Error");
        });
    });	
    //-------------------------------------------------------END
    //     //on click of delete record----------------------------START
    // $(document).on("click", ".btn-del-record-movie", function(event) { 

    //     //identify the row which we will remove from our table.
    //     var row = $(this).parent().parent();

    //     $.ajax({
    //         url: 'movies/delete',
    //         data: { id:this.id },
    //         type: 'POST'
    //     })
    //     .done((data) => {
    //         if(data) {
    //            console.log(data);
    //            row.remove();
    //         }
    //     })
    //     .fail((err) => {
    //         console.log("Error");
    //     });
    // });	
    // //-------------------------------------------------------END
    //     //on click of delete record analisys----------------------------START
    //     $(document).on("click", ".btn-del-record-analisys", function(event) { 

    //         //identify the row which we will remove from our table.
    //         var row = $(this).parent().parent();
    
    //         $.ajax({
    //             url: 'analisys/delete',
    //             data: { id:this.id },
    //             type: 'POST'
    //         })
    //         .done((data) => {
    //             if(data) {
    //                console.log(data);
    //                row.remove();
    //             }
    //         })
    //         .fail((err) => {
    //             console.log("Error");
    //         });
    //     });	
    //     //-------------------------------------------------------END
    //             //on click of delete record video----------------------------START
    //             $(document).on("click", ".btn-del-record-video", function(event) { 

    //                 //identify the row which we will remove from our table.
    //                 var row = $(this).parent().parent();
            
    //                 $.ajax({
    //                     url: 'videos/delete',
    //                     data: { id:this.id },
    //                     type: 'POST'
    //                 })
    //                 .done((data) => {
    //                     if(data) {
    //                        console.log(data);
    //                        row.remove();
    //                     }
    //                 })
    //                 .fail((err) => {
    //                     console.log("Error");
    //                 });
    //             });	
    //             //-------------------------------------------------------END
    //             //on click of delete new video----------------------------START
    //             $(document).on("click", ".btn-del-record-new", function(event) { 

    //             //identify the row which we will remove from our table.
    //             var row = $(this).parent().parent();
        
    //             $.ajax({
    //                 url: 'news/delete',
    //                 data: { id:this.id },
    //                 type: 'POST'
    //             })
    //             .done((data) => {
    //                 if(data) {
    //                     console.log(data);
    //                     row.remove();
    //                 }
    //             })
    //             .fail((err) => {
    //                 console.log("Error");
    //             });
    //         });	
    //         //-------------------------------------------------------END
    

});

function getRowHtmlHotel(item) {
    
    var thtml = getTD(item.name) 
                + getTD(item.city) 
                + getTD(item.address)
                + getTD(item.stars)
                + getDelBtnHotel(item._id);
    thtml = getTR(thtml);
    return thtml;
}
function getTD(val) {
    return '<td>'+ val + '</td>';
}

function getTR(val) {
    return '<tr>'+ val + '</tr>';
}

function getDelBtnHotel(val) {
    return '<td><button type="button" id='+ val +' class="btn btn-default btn-sm btn-del-hotel"><span class="fa fa-trash-alt" style="color:red; font-size:17px"></span> </button></td>';
}
