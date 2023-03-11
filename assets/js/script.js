$(function() {
    $("#form-app").validate({
        rules: {
            first_name: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
            last_name: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
            phone_number: {
                required: true,
                minlength: 10,
                maxlength: 15
            },
            id_number: {
                required: true,
                minlength: 8,
                maxlength: 15
            },
            amount: {
                required: true,
                minlength: 4,
                maxlength: 5
            },
            loan_type_id: {
                required: true,
            }
        },
        messages: {
            first_name: {
                required: 'Please enter your first name',
            },
            last_name: {
                required: 'Please enter your last name',
            },
            phone_number: {
                required: 'Please enter your phone number'
            },
            id_number: {
                required: 'Please enter your ID number'
            },
            loan_type_id: {
                required: 'Please select loan type'
            },
            amount: {
                required: 'Please enter loan amount'
            }
        },
        /*submitHandler: function(ev) {
            $(ev).ajaxSubmit({
                type: 'POST',
                url: './stk_initiate.php/',
                data: '',
                dataType: 'json',
                success: function(data) {
                    if (data.success == 0) {
                        Swal.fire({
                            text: data.message,
                            icon: "error",
                            buttons: false,
                            closeOnClickOutside: false,
                            timer: 3000,
                        }).then((state)=>{}
                        );
                    } else if (data.success == 1) {
                        Swal.fire({
                            text: data.message,
                            icon: "success",
                            buttons: false,
                            timer: 10000,
                        }).then((state)=>{
                            window.location.reload();
                        }
                        );
                    }else{
                        Swal.fire({
                            text: data.message,
                            icon: "error",
                            buttons: false,
                            closeOnClickOutside: false,
                            timer: 3000,
                        }).then((state)=>{}
                        );
                    }
                }
            });
        },*/
        errorPlacement: function(error, element) {},
        invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                var message = errors == 1 ? 'Please correct the following error:\n' : 'Please correct the following ' + errors + ' errors.\n';
                var errors = "";
                console.log(errors);
                if (validator.errorList.length > 0) {
                    for (x = 0; x < validator.errorList.length; x++) {
                        errors += "<br>" + validator.errorList[x].message;
                    }
                }
                Swal.fire({
                    title: message,
                    html: errors,
                    icon: "warning"
                });
            }
            validator.focusInvalid();
        }
    });
});
function check_eligibility() {
    var phone_number = $('#phone_number').val();
    if (phone_number == '') {
        Swal.fire({
            title: 'Error',
            text: 'Enter Mobile Number',
            icon: "warning"
        });
    } else if (phone_number.length < 10){
        Swal.fire({
            title: 'Error',
            text: 'Enter a Valid Phone Number',
            icon: "warning"
        });
    }else if (phone_number.length > 13){
        Swal.fire({
            title: 'Error',
            text: 'Enter a Valid Phone Number',
            icon: "warning"
        });
    }else{
        
        Swal.fire({
            text: 'Your Loan Limit is 10,000',
            icon: "success",
            buttons: false,
        }).then((result)=>{
            $('#btnCheck').hide();
            $('#btnSave').show();
            $('#row-amount').show();
            $('#app-title').html(data.message);
            $('#app-title').show();
        }
        );
                    
    }
}
;$(document).ready(function() {
    $(document).ajaxSend(function(event, request, settings) {
        $.LoadingOverlay("show");
    });
    $(document).ajaxStop(function(event, request, settings) {
        $.LoadingOverlay("hide");
    });
    $(document).ajaxComplete(function(event, request, settings) {
        $.LoadingOverlay("hide");
    });
});
