//Code written by Chris Youderian and released under this MIT license: http://opensource.org/licenses/MIT

var windmill=(function(){
        var scale_factor; var toptwo; var spinning=false; var original_height; var original_width;
        var options={};
        options.teal_color='#7aaf96';
        options.darkteal_color='#517c6b';
        options.orange_color='#c85449';
        options.yellow_color='#e6c05c';
        options.skin_color='#d58455';
        options.brown_color='#463023';
        options.white_color='#fff';
        options.time=3000;
        
        var init=function(){
            var div = document.getElementById("windmill");      
            var width=div.offsetWidth;
            original_width=500;
            original_height=500;
            scale_factor=width/original_width;
            var height=original_height*scale_factor;                    
            var transformation='S'+scale_factor+','+scale_factor+',0,0';    
            var paper=Raphael(div, width, height);

            //M 25.79661,5.5593224 A 3.1525424,3.2542372 0 0 1 22.644068,8.8135595 3.1525424,3.2542372 0 0 1 19.491525,5.5593224 3.1525424,3.2542372 0 0 1 22.644068,2.3050852 3.1525424,3.2542372 0 0 1 25.79661,5.5593224 Z M 18.61017,15.18644 a 3.1525424,3.2542372 0 0 1 -3.152543,3.254238 3.1525424,3.2542372 0 0 1 -3.152542,-3.254238 3.1525424,3.2542372 0 0 1 3.152542,-3.254237 3.1525424,3.2542372 0 0 1 3.152543,3.254237 z M 10.847458,5.8305082 A 3.1525424,3.2542372 0 0 1 7.6949153,9.0847454 3.1525424,3.2542372 0 0 1 4.5423729,5.8305082 3.1525424,3.2542372 0 0 1 7.6949153,2.5762711 3.1525424,3.2542372 0 0 1 10.847458,5.8305082 Z
            toptwo_path="m 390.24228,229.04181 c -7.48015,-0.98149 -14.28028,2.29014 -18.13369,7.6338 -3.85341,-5.34366 -10.76686,-8.61529 -18.247,-7.52474 -8.2735,1.19959 -14.84696,7.8519 -15.75365,15.81286 -1.24668,10.90542 7.70682,20.06597 18.70036,20.06597 0.45335,0 0.90668,0 1.36003,-0.10911 l 10.2002,0 0.1133,18.64828 8.27348,0 -0.11329,-18.64828 9.74685,0 c 0.45335,0 0.90668,0.10911 1.36002,0.10911 11.10688,-0.10911 19.83372,-9.37866 18.47369,-20.17502 -1.02002,-8.07002 -7.70682,-14.61328 -15.9803,-15.81287 z m -43.86084,19.84786 c -1.2467,-6.8704 4.87342,-12.86839 12.1269,-11.77784 4.30674,0.65432 7.93348,4.03499 8.6135,8.17905 1.24669,6.87043 -4.87342,12.86841 -12.1269,11.77786 -4.30676,-0.65432 -7.93349,-4.03501 -8.6135,-8.17907 z m 42.95415,8.07002 c -7.14014,1.1996 -13.37359,-4.68933 -12.24023,-11.66881 0.68001,-4.14406 4.19341,-7.63379 8.50016,-8.28811 7.14014,-1.1996 13.3736,4.68933 12.24023,11.6688 -0.56667,4.14406 -4.08007,7.52475 -8.50016,8.28812 z";            
            var body_path="m 446.00334,461.65448 c 0,6.6523 -5.66677,12.10503 -12.58024,12.10503 l -121.949,0 c -6.91346,0 -12.58023,-5.45273 -12.58023,-12.10503 l 0,-68.70416 c 0,-6.65231 5.66677,-12.10502 12.58023,-12.10502 l 121.949,0 c 6.91347,0 12.58024,5.45271 12.58024,12.10502 l 0,68.70416 z";            
            // var topone_path="m 277.239015,371.88193a11.673555,8.3971758 0 1,0 23.34711,0a11.673555,8.3971758 0 1,0 -23.34711,0 z";
            var meter_path="matrix(1.1333549,0,0,1.0905423,-71.25984,100.68499)";
            var lhone_path="m 298.55387,406.47304 c 0,2.50824 -2.04004,4.47123 -4.64676,4.47123 l 0,0 c -2.60672,0 -4.64676,-1.96299 -4.64676,-4.47123 l 0,-12.32313 c 0,-2.50825 2.15337,-4.47122 4.64676,-4.47122 l 0,0 c 2.60672,0 4.64676,2.07202 4.64676,4.47122 l 0,12.32313 z";
            var lhtwo_path="m 289.82703,423.4855 c 0,2.6173 -2.15337,4.68933 -4.87343,4.68933 l 0,0 c -2.72005,0 -4.87343,-2.07203 -4.87343,-4.68933 l 0,-27.59072 c 0,-2.61729 2.15338,-4.68934 4.87343,-4.68934 l 0,0 c 2.72006,0 4.87343,2.07205 4.87343,4.68934 l 0,27.59072 z";
            var lhfour_path="m 289.82703,472.99611 c 0,2.61732 -2.15337,4.68934 -4.87343,4.68934 l 0,0 c -2.72005,0 -4.87343,-2.07202 -4.87343,-4.68934 l 0,-27.59071 c 0,-2.61731 2.15338,-4.68932 4.87343,-4.68932 l 0,0 c 2.72006,0 4.87343,2.07201 4.87343,4.68932 l 0,27.59071 z";
            var lhfive_path="m 274.30006,479.32127 c 0,0 -0.22668,-14.83138 9.18018,-14.83138 9.40685,0 11.78689,7.08853 11.78689,16.46719 0,0 -0.90668,3.38067 -3.28673,3.38067 -2.38004,0 0.22667,-6.32513 -1.47336,-7.96095 -1.70003,-1.63582 -3.5134,1.96297 -3.5134,6.32515 0,4.47122 -5.32676,3.59878 -8.95351,3.59878 -3.62674,0 -3.74007,-1.85392 -3.74007,-6.97946 z";
            var middleye_path="m 417.32946,324.68237 c 0,6.65231 -5.66677,12.10502 -12.58024,12.10502 l -68.79465,0 c -6.91346,0 -12.58023,-5.45271 -12.58023,-12.10502 l 0,-4.25311 c 0,-6.65231 5.66677,-12.10503 12.58023,-12.10503 l 68.79465,0 c 6.91347,0 12.58024,5.45272 12.58024,12.10503 l 0,4.25311 z";
            var lltwo_path="m 355.67495,516.07254 c 0,5.23461 -4.42009,9.37866 -9.74685,9.37866 l -22.3271,0 c -5.44009,0 -9.74684,-4.25311 -9.74684,-9.37866 l 0,0 c 0,-5.2346 4.42008,-9.37866 9.74684,-9.37866 l 22.3271,0 c 5.44011,-0.10899 9.74685,4.14406 9.74685,9.37866 l 0,0 z";
            var llthree_path="m 335.27457,553.15097 c 12.46689,0 22.44041,7.85192 22.44041,19.84787 l -44.99418,0 c 0.1133,-11.99595 10.08686,-19.84787 22.55377,-19.84787 z";
            var rltwo_path="m 430.81639,516.07254 c 0,5.23461 -4.42009,9.37866 -9.74687,9.37866 l -22.32709,0 c -5.4401,0 -9.74684,-4.25311 -9.74684,-9.37866 l 0,0 c 0,-5.2346 4.42008,-9.37866 9.74684,-9.37866 l 22.32709,0 c 5.44011,-0.10899 9.74687,4.14406 9.74687,9.37866 l 0,0 z";
            var rlthree_path="m 410.41599,553.15097 c 12.46691,0 22.44043,7.85192 22.44043,19.84787 l -44.9942,0 c 0.1133,-11.99595 10.08686,-19.84787 22.55377,-19.84787 z";
            var reone_path="m 378.34204,323.04656 c 0,-10.68731 8.95351,-19.3026 20.06039,-19.3026 11.10688,0 20.06038,8.61529 20.06038,19.3026 0,10.6873 -8.9535,19.30259 -20.06038,19.30259 -10.99355,0 -20.06039,-8.61529 -20.06039,-19.30259 z";
            var retwo_path="m 383.89549,323.26467 c 0,-8.07002 6.80013,-14.61328 15.18695,-14.61328 8.38682,0 15.18696,6.54326 15.18696,14.61328 0,8.07001 -6.80014,14.61325 -15.18696,14.61325 -8.38682,0 -15.18695,-6.54324 -15.18695,-14.61325 z";
            var refour_path="m 400.78248,321.73791 c 0,-2.07203 1.81337,-3.8169 3.96674,-3.8169 2.15337,0 3.96674,1.74487 3.96674,3.8169 0,2.07203 -1.81337,3.8169 -3.96674,3.8169 -2.15337,0 -3.96674,-1.74487 -3.96674,-3.8169 z";
            var rtwo_path="m 453.03014,375.39258 c 0,-2.6173 2.15337,-4.68932 4.87343,-4.68932 l 0,0 c 2.72004,0 4.87342,2.07202 4.87342,4.68932 l 0,27.59073 c 0,2.6173 -2.15338,4.68932 -4.87342,4.68932 l 0,0 c -2.72006,0 -4.87343,-2.07202 -4.87343,-4.68932 l 0,-27.59073 z";
            var rfour_path="m 453.03014,325.77291 c 0,-2.6173 2.15337,-4.68933 4.87343,-4.68933 l 0,0 c 2.72004,0 4.87342,2.07203 4.87342,4.68933 l 0,27.59073 c 0,2.6173 -2.15338,4.68932 -4.87342,4.68932 l 0,0 c -2.72006,0 -4.87343,-2.07202 -4.87343,-4.68932 l 0,-27.59073 z";
            var rfive_path="m 468.5571,319.55683 c 0,0 0.22667,14.83138 -9.18017,14.83138 -9.40685,0 -11.7869,-7.08853 -11.7869,-16.4672 0,0 0.90668,-3.38069 3.28674,-3.38069 2.38003,0 -0.22668,6.32516 1.47335,7.96096 1.70004,1.63581 3.51341,-1.96298 3.51341,-6.32514 0,-4.47122 5.32676,-3.59879 8.95349,-3.59879 3.74008,0 3.74008,1.85392 3.74008,6.97948 z";
            var rone_path="m 444.41664,392.40505 c 0,-2.50826 2.04004,-4.47122 4.64675,-4.47122 l 0,0 c 2.60672,0 4.64675,1.96296 4.64675,4.47122 l 0,12.32312 c 0,2.50824 -2.15337,4.47124 -4.64675,4.47124 l 0,0 c -2.60671,0 -4.64675,-1.963 -4.64675,-4.47124 l 0,-12.32312 z";  
            // var head_path=rect(86.370941, 122.51567, 287.60394, 309.43405);

            var toptwo_path_scaled=Raphael.transformPath(toptwo_path, transformation);
            var body_path_scaled=Raphael.transformPath(body_path, transformation);   
            // var topone_path_scaled=Raphael.transformPath(topone_path, transformation);
            var lhone_path_scaled=Raphael.transformPath(lhone_path, transformation);
            var lhtwo_path_scaled=Raphael.transformPath(lhtwo_path, transformation);
            var lhfour_path_scaled=Raphael.transformPath(lhfour_path, transformation);
            var lhfive_path_scaled=Raphael.transformPath(lhfive_path, transformation);
            // var meter_path_scaled=Raphael.transformPath(meter_path, transformation);
            var middleye_path_scaled=Raphael.transformPath(middleye_path, transformation);
            var lltwo_path_scaled=Raphael.transformPath(lltwo_path, transformation);
            var llthree_path_scaled=Raphael.transformPath(llthree_path, transformation);
            var rltwo_path_scaled=Raphael.transformPath(rltwo_path, transformation);
            var rlthree_path_scaled=Raphael.transformPath(rlthree_path, transformation);
            var reone_path_scaled=Raphael.transformPath(reone_path, transformation);
            var retwo_path_scaled=Raphael.transformPath(retwo_path, transformation);
            var refour_path_scaled=Raphael.transformPath(refour_path, transformation);
            var rtwo_path_scaled=Raphael.transformPath(rtwo_path, transformation);
            var rfour_path_scaled=Raphael.transformPath(rfour_path, transformation);
            var rfive_path_scaled=Raphael.transformPath(rfive_path, transformation);
            var rone_path_scaled=Raphael.transformPath(rone_path, transformation);
            // var head_path_scaled=Raphael.transformPath(head_path, transformation);


            var body=paper.path(body_path_scaled);          
            body.attr({fill: options.teal_color, "stroke-width": 0});
            toptwo=paper.path(toptwo_path_scaled);
            toptwo.attr({fill: options.darkteal_color, "stroke-width": 0});
            // var topone=paper.path(topone_path_scaled);
            // topone.attr({fill: options.darkteal_color, "stroke-width": 0});
            var lhone=paper.path(lhone_path_scaled);
            lhone.attr({fill: options.orange_color, "stroke-width": 0});
            var lhtwo=paper.path(lhtwo_path_scaled);
            lhtwo.attr({fill: options.skin_color, "stroke-width": 0});
            var lhfour=paper.path(lhfour_path_scaled);
            lhfour.attr({fill: options.skin_color, "stroke-width": 0});
            var lhfive=paper.path(lhfive_path_scaled);
            lhfive.attr({fill: options.teal_color, "stroke-width": 0});
            // meter=paper.path(meter_path_scaled);
            // meter.attr({fill: options.toptwo_color, "stroke-width": 0}); 
            var middleye=paper.path(middleye_path_scaled);
            middleye.attr({fill: options.darkteal_color, "stroke-width": 0});
            var lltwo=paper.path(lltwo_path_scaled);
            lltwo.attr({fill: options.yellow_color, "stroke-width": 0});
            var llthree=paper.path(llthree_path_scaled);
            llthree.attr({fill: options.orange_color, "stroke-width": 0});
            var rltwo=paper.path(rltwo_path_scaled);
            rltwo.attr({fill: options.yellow_color, "stroke-width": 0});
            var rlthree=paper.path(rlthree_path_scaled);
            rlthree.attr({fill: options.orange_color, "stroke-width": 0});
            var reone=paper.path(reone_path_scaled);
            reone.attr({fill: options.yellow_color, "stroke-width": 0});
            var retwo=paper.path(retwo_path_scaled);
            retwo.attr({fill: options.orange_color, "stroke-width": 0});
            var refour=paper.path(refour_path_scaled);
            refour.attr({fill: options.white_color, "stroke-width": 0});
            var rtwo=paper.path(rtwo_path_scaled);
            rtwo.attr({fill: options.skin_color, "stroke-width": 0});
            var rfour=paper.path(rfour_path_scaled);
            rfour.attr({fill: options.skin_color, "stroke-width": 0});
            var rfive=paper.path(rfive_path_scaled);
            rfive.attr({fill: options.teal_color, "stroke-width": 0});
            var rone=paper.path(rone_path_scaled);
            rone.attr({fill: options.orange_color, "stroke-width": 0});
            // var head=paper.path(head_path_scaled);
            // head.attr({fill: options.teal_color, "stroke-width": 0});
        }
        



        var start=function(){
            if (spinning){return}else{spinning=true}
            var center_x=(365.71)*scale_factor;
            var center_y=(original_height-(502.86))*scale_factor;                
            var position='R'+360+', '+center_x+', '+center_y;               
            // var anim=Raphael.animation({transform: position}, options.time, 'linear').repeat(Infinity); 
            // toptwo.animate(anim);
        }
        
        var stop=function(){
            if (!spinning){return}else{spinning=false}
            toptwo.stop();
            var current_path=Raphael.transformPath(toptwo.attr('path'), toptwo.attr('transform'))
            toptwo.attr({path: current_path, transform: ''});            
        }

        return {

            start: start,
            stop: stop,
            init: init,
            options: options
        }
}());
