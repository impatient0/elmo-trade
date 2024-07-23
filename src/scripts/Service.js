let serviceContainers = document.querySelectorAll('.service-container');

serviceContainers.forEach(serviceContainer => {

    let isExpanded = false;
    
    function slideUp(object) {
        if (isExpanded) {
            document.querySelector('#bgi_'+object.id).style.filter="blur(1px) brightness(80%)";
            document.querySelector('#bgi_'+object.id).style.filter="blur(1px) brightness(80%)";
            document.querySelector('#srv_'+object.id).classList.add('expanded');
            // document.querySelector('#dsc_'+object.id).style.opacity="1";
            // document.querySelector('#btn_'+object.id).style.opacity="1";
        }
    }
    
    function slideDown(object) {
        if (!isExpanded) {
            document.querySelector('#bgi_'+object.id).style.filter="blur(0px) brightness(100%)";
            document.querySelector('#hdr_'+object.id).style.filter="blur(0px) brightness(100%)";
            document.querySelector('#srv_'+object.id).classList.remove('expanded');
        }
    }
    
    serviceContainer.addEventListener('mouseenter', function() {
        isExpanded = true;
        slideUp(this);
    });
    
    serviceContainer.addEventListener('mouseleave', function() {
        isExpanded = false;
        setTimeout(() => slideDown(this), 200);
        // document.querySelector('#dsc_'+this.id).style.opacity="0";
        // document.querySelector('#btn_'+this.id).style.opacity="0";
    });

});