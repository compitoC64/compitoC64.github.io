var slideIndex = 0;
display();

function moveSlide(direction)
{
	if(slideIndex!=0 ||	direction == 1)
	{
		slideIndex = slideIndex + direction;
	}
	display();
}

function display()
{
	var elements = document.getElementsByClassName('slides');
    for(var i=0; i < elements.length; i++){
        elements[i].style.display = "none";
    }
	document.getElementsByClassName("slides")[slideIndex].style.display	= "flex";
}