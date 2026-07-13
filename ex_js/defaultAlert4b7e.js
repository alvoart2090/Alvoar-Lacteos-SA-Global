function alertSucessSent() {
    alertify.set('notifier', 'position', 'top-center');
    var notification = alertify.success("Your message has been sent ! Thank you for your enquiry.", "success", 5);
}


function alertRecaptchaFail() {
    var notification = alertify.error("Recaptcha Validation Fail. Please Try Again Later.", "error", 5);
}

function alertEmailFail() {
    var notification = alertify.error("Email Address Validation Fail. Please Try Again Later.", "error", 5);
}

function alertContactFail() {
    var notification = alertify.error("Phone Number Validation Fail. Please Try Again Later.", "error", 5);
}

function alertFileFail() {
    var notification = alertify.error("File Validation Fail. Please check your file type and file size.", "error", 5);
}

function alertError(errorMessage) {
    // var notification = alertify.error(errorMessage, "error", 5);
    alertify.set('notifier', 'position', 'top-center');
    alertify.error('<div class="text-center w-100"><i class="fas fa-exclamation-circle"></i>&nbsp;' + errorMessage + '</div>');
}

function alertSuccessful(errorMessage) {
    // var notification = alertify.error(errorMessage, "error", 5);
    alertify.set('notifier', 'position', 'top-center');
    alertify.success('<div class="text-center w-100"><i class="fas fa-exclamation-circle"></i>&nbsp;' + errorMessage + '</div>');
}

function outofStock() {
    alertify.set('notifier', 'position', 'top-center');
    alertify.error('<div class="text-center w-100"><i class="fas fa-exclamation-circle"></i>&nbsp; Not enough stock</div>');

}
function compareMoreThan4(compareLimit) {
    alertify.set('notifier', 'position', 'top-center');
    alertify.error('<div class="text-center w-100"><i class="fas fa-exclamation-circle"></i>&nbsp; Sorry, cannot compare more than ' + compareLimit + ' items.</div>');

}
function removeSuccess() {
    alertify.set('notifier', 'position', 'top-center');
    alertify.success('<div class="text-center w-100"><i class="fas fa-trash-alt"></i>&nbsp; Item Successful Removed</div>');
}
function alertWrongPassOrId() {
    var notification = alertify.error("<i class='fas fa-exclamation-circle'></i>&nbsp;Login Failed.<br>Invalid Username or Password.", "error", 5);
}
function success_copy() {
    var notification = alertify.success("<i class='fas fa-exclamation-circle'></i>&nbsp;Successfully copied coupon code.", "success", 5);
}
function success_addtoquotation(message='') {
    //var notification = alertify.success("<i class='fas fa-shopping-cart'></i>&nbsp;Successfully added product into your cart.", "success", 5);
    alertify.set('notifier', 'position', 'top-center');
    if (message!=''){
        alertify.success(message);
    }else{
        alertify.success('<div class="text-center w-100"><i class="fas fa-shopping-cart"></i>&nbsp; Successfully added into cart.</div>');
    }
}
function alertSucess(x) {
    alertify.set('notifier', 'position', 'top-center');
    var notification = alertify.success(x, "success", 5);
}
function alertUnsucess(x) {
    var notification = alertify.error(x, "error", 5);
}