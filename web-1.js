// Declare the function to load the page content
function loadPage(page) {
	$.ajax({
		url: 'pages/' + page + '.html', // URL of the page content
		type: 'GET',
		dataType: 'html',
		success: function(data) {
			$('#content').html(data); // Display the page content in the main element
		},
		error: function(xhr, textStatus, errorThrown) {
			$('#content').html('<p>Error loading the page.</p>'); // Display an error message if the page content cannot be loaded
		}
	});
}

// Add an event listener to the page links
$('.page-link').on('click', function(e) {
	e.preventDefault(); // Prevent the default behavior of the link
	var page = $(this).data('page'); // Get the data-page attribute of the link
	loadPage(page); // Load the page content
});