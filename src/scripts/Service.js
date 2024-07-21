let serviceContainers = document.querySelectorAll('.service-container');

serviceContainers.forEach(serviceContainer => {

    let isExpanded = false;
    
    function fadeIn(object) {
        if (isExpanded) {
            document.querySelector('#dsc_'+object.id).style.opacity="1";
            document.querySelector('#btn_'+object.id).style.opacity="1";
        }
    }
    
    function slideDown(object) {
        if (!isExpanded) {
            document.querySelector('#srv_'+object.id).classList.remove('expanded');
            document.querySelector('#dsc_'+object.id).style.display="none";
            document.querySelector('#btn_'+object.id).style.display="none";
        }
    }
    
    serviceContainer.addEventListener('mouseenter', function() {
        isExpanded = true;
        document.querySelector('#srv_'+this.id).classList.add('expanded');
        document.querySelector('#hdr_'+this.id).style.color="white";
        document.querySelector('#dsc_'+this.id).style.color="white";
        document.querySelector('#dsc_'+this.id).style.display="block";
        document.querySelector('#btn_'+this.id).style.display="block";
        setTimeout(() => fadeIn(this), 200);
    });
    
    serviceContainer.addEventListener('mouseleave', function() {
        isExpanded = false;
        setTimeout(() => slideDown(this), 200);
        document.querySelector('#hdr_'+this.id).style.color="black";
        document.querySelector('#dsc_'+this.id).style.color="black";
        document.querySelector('#dsc_'+this.id).style.opacity="0";
        document.querySelector('#btn_'+this.id).style.opacity="0";
    });

});