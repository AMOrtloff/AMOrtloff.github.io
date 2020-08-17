
function toggleVisibility(element, additional_class) {
  let toBeToggled = "";
  let parent = element.parentElement;
  if (additional_class == "abstract"){
      toBeToggled = parent.querySelector('.additional_info.pub_abstract');
      if(parent.querySelector('.additional_info.pub_bibtex') !== null){
        parent.querySelector('.additional_info.pub_bibtex').classList.add("hidden");
      }

  } else if (additional_class == "bibtex"){
      toBeToggled = parent.querySelector('.additional_info.pub_bibtex');
      if(parent.querySelector('.additional_info.pub_abstract') !== null){
        parent.querySelector('.additional_info.pub_abstract').classList.add("hidden");
      }
  }
  toBeToggled.classList.toggle("hidden");
}


function copyTextToClipboard(element) {
  console.log(element);
  let copyFromHere = element.parentElement.querySelector('p');
  let range = document.createRange();
  range.selectNode(copyFromHere);
  window.getSelection().addRange(range);
  let copysuccess
  try{
       copysuccess = document.execCommand("copy") // run command to copy selected text to clipboard
       UIkit.notification({message:"<span uk-icon='icon: check'></span> Copied BibTeX to clipboard!", status:'success'});
   } catch(e){
       copysuccess = false
       UIkit.notification({message:"<span uk-icon='icon: check'></span> Sorry, this didn't work. Maybe your browser is outdated?", status:'warning'});
   }
  window.getSelection().removeAllRanges();

}
