//Code written by Chris Youderian and released under this MIT license: http://opensource.org/licenses/MIT

var windmill=(function(){
        var scale_factor; var sails; var spinning=false; var original_height; var original_width;
        var options={};
        options.sail_color='skyblue';
        options.base_color='gray';
        options.time=3000;
        
        var init=function(){
            var div = document.getElementById("windmill");      
            var width=div.offsetWidth;
            original_width=32;
            original_height=32;
            scale_factor=width/original_width;
            var height=original_height*scale_factor;                    
            var transformation='S'+scale_factor+','+scale_factor+',0,0';    
            var paper=Raphael(div, width, height);
            //M 25.79661,5.5593224 A 3.1525424,3.2542372 0 0 1 22.644068,8.8135595 3.1525424,3.2542372 0 0 1 19.491525,5.5593224 3.1525424,3.2542372 0 0 1 22.644068,2.3050852 3.1525424,3.2542372 0 0 1 25.79661,5.5593224 Z M 18.61017,15.18644 a 3.1525424,3.2542372 0 0 1 -3.152543,3.254238 3.1525424,3.2542372 0 0 1 -3.152542,-3.254238 3.1525424,3.2542372 0 0 1 3.152542,-3.254237 3.1525424,3.2542372 0 0 1 3.152543,3.254237 z M 10.847458,5.8305082 A 3.1525424,3.2542372 0 0 1 7.6949153,9.0847454 3.1525424,3.2542372 0 0 1 4.5423729,5.8305082 3.1525424,3.2542372 0 0 1 7.6949153,2.5762711 3.1525424,3.2542372 0 0 1 10.847458,5.8305082 Z
            var sails_path="M 25.79661,5.5593224 A 3.1525424,3.2542372 0 0 1 22.644068,8.8135595 3.1525424,3.2542372 0 0 1 19.491525,5.5593224 3.1525424,3.2542372 0 0 1 22.644068,2.3050852 3.1525424,3.2542372 0 0 1 25.79661,5.5593224 Z M 18.61017,15.18644 a 3.1525424,3.2542372 0 0 1 -3.152543,3.254238 3.1525424,3.2542372 0 0 1 -3.152542,-3.254238 3.1525424,3.2542372 0 0 1 3.152542,-3.254237 3.1525424,3.2542372 0 0 1 3.152543,3.254237 z M 10.847458,5.8305082 A 3.1525424,3.2542372 0 0 1 7.6949153,9.0847454 3.1525424,3.2542372 0 0 1 4.5423729,5.8305082 3.1525424,3.2542372 0 0 1 7.6949153,2.5762711 3.1525424,3.2542372 0 0 1 10.847458,5.8305082 Z";            
            var base_path="m 17.694915,7.1525426 a 2.3728814,2.2711864 0 0 1 -2.372881,2.2711863 2.3728814,2.2711864 0 0 1 -2.372882,-2.2711863 2.3728814,2.2711864 0 0 1 2.372882,-2.2711864 2.3728814,2.2711864 0 0 1 2.372881,2.2711864 z m -4.135593,7.0169494 3.864407,0 0,17.355932 -3.864407,0 z";            
            var sails_path_scaled=Raphael.transformPath(sails_path, transformation);
            var base_path_scaled=Raphael.transformPath(base_path, transformation);          
            var base=paper.path(base_path_scaled);          
            base.attr({fill: options.base_color, "stroke-width": 0});
            sails=paper.path(sails_path_scaled);
            sails.attr({fill: options.sail_color, "stroke-width": 0});
        }
        
        var start=function(){
            if (spinning){return}else{spinning=true}
            var center_x=(15.19)*scale_factor;
            var center_y=(original_height-(25.15))*scale_factor;                
            var position='R'+360+', '+center_x+', '+center_y;               
            var anim=Raphael.animation({transform: position}, options.time, 'linear').repeat(Infinity); 
            sails.animate(anim);
        }
        
        var stop=function(){
            if (!spinning){return}else{spinning=false}
            sails.stop();
            var current_path=Raphael.transformPath(sails.attr('path'), sails.attr('transform'))
            sails.attr({path: current_path, transform: ''});            
        }

        return {

            start: start,
            stop: stop,
            init: init,
            options: options
        }
}());
