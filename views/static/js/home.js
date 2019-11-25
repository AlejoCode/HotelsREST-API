$( document ).ready(function() {

    //on page load list Hotels ------------START
    $.ajax({
        url: "hotels/list",
        dataType: "json",
    })
    .done((data) => {
        if(data) {

            var odata = $.parseJSON(JSON.stringify(data.docs));
            odata.forEach(item => {
                $('#myTableHotel > tbody:last-child').append(getRowHtmlHotel(item));
            });
        }
    })
    .fail((err) => {
        console.log("Error");
    });  
    
    //on add Hotel submit the form----------------------------START
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
	  
    //on click of delete Hotel----------------------------START
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
