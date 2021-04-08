$('.page-content').on("click", '.display-resources', function() {
  const buttonClass = $(this).attr('class').slice(18)
  $(`.resources > div.${buttonClass}`).toggleClass('hidden')
  $(`.resources > div.${buttonClass}`).siblings().addClass('hidden')
})