$("a.titlebar").on("click",function(){$(this).next().toggleClass("contentShow"),$(".accordion-content").not($(this).next()).removeClass("contentShow")});