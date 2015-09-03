//Code written by Chris Youderian and released under this MIT license: http://opensource.org/licenses/MIT

var windmill=(function(){
        var scale_factor; var toptwo; var topone; var rtwo; var rthree; var rfour; var rfive; var righthand; var spinning=false; var original_height; var original_width;
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
            original_width=300;
            original_height=300;
            scale_factor=width/original_width;
            var height=original_height*scale_factor;                    
            var transformation='S'+scale_factor+','+scale_factor+',0,0';    
            var paper=Raphael(div, width, height);


            //M 25.79661,5.5593224 A 3.1525424,3.2542372 0 0 1 22.644068,8.8135595 3.1525424,3.2542372 0 0 1 19.491525,5.5593224 3.1525424,3.2542372 0 0 1 22.644068,2.3050852 3.1525424,3.2542372 0 0 1 25.79661,5.5593224 Z M 18.61017,15.18644 a 3.1525424,3.2542372 0 0 1 -3.152543,3.254238 3.1525424,3.2542372 0 0 1 -3.152542,-3.254238 3.1525424,3.2542372 0 0 1 3.152542,-3.254237 3.1525424,3.2542372 0 0 1 3.152543,3.254237 z M 10.847458,5.8305082 A 3.1525424,3.2542372 0 0 1 7.6949153,9.0847454 3.1525424,3.2542372 0 0 1 4.5423729,5.8305082 3.1525424,3.2542372 0 0 1 7.6949153,2.5762711 3.1525424,3.2542372 0 0 1 10.847458,5.8305082 Z
            toptwo_path="m 390.24228,229.04181 c -7.48015,-0.98149 -14.28028,2.29014 -18.13369,7.6338 -3.85341,-5.34366 -10.76686,-8.61529 -18.247,-7.52474 -8.2735,1.19959 -14.84696,7.8519 -15.75365,15.81286 -1.24668,10.90542 7.70682,20.06597 18.70036,20.06597 0.45335,0 0.90668,0 1.36003,-0.10911 l 10.2002,0 0.1133,18.64828 8.27348,0 -0.11329,-18.64828 9.74685,0 c 0.45335,0 0.90668,0.10911 1.36002,0.10911 11.10688,-0.10911 19.83372,-9.37866 18.47369,-20.17502 -1.02002,-8.07002 -7.70682,-14.61328 -15.9803,-15.81287 z m -43.86084,19.84786 c -1.2467,-6.8704 4.87342,-12.86839 12.1269,-11.77784 4.30674,0.65432 7.93348,4.03499 8.6135,8.17905 1.24669,6.87043 -4.87342,12.86841 -12.1269,11.77786 -4.30676,-0.65432 -7.93349,-4.03501 -8.6135,-8.17907 z m 42.95415,8.07002 c -7.14014,1.1996 -13.37359,-4.68933 -12.24023,-11.66881 0.68001,-4.14406 4.19341,-7.63379 8.50016,-8.28811 7.14014,-1.1996 13.3736,4.68933 12.24023,11.6688 -0.56667,4.14406 -4.08007,7.52475 -8.50016,8.28812 z";            
            var meter_path="M 345.5 428.4 C 345.4 428.2 343 425.3 344.8 421.8 L 345 421.3 C 347.2 417.1 352.2 407 370.2 406.8 L 370.6 406.8 C 388.7 406.9 393.6 416.9 395.8 421.3 L 396 421.8 C 397.8 425.3 395.5 428.2 395.3 428.3 L 386.5 440.4 L 370.3 440.4 L 354.1 440.4 L 345.5 428.4Z";
            var meterouter_path="M 370.4 407.9 L 370.6 407.9 C 387.9 408 392.5 417.3 394.8 421.7 L 395 422.3 C 396.5 425.1 394.5 427.5 394.5 427.6 L 394.5 427.7 L 394.5 427.8 L 386.2 439.5 L 370.5 439.5 L 354.9 439.5 L 346.5 427.8 L 346.5 427.7 L 346.5 427.6 C 346.5 427.6 344.6 425.2 346 422.3 L 346.3 421.7 C 348.5 417.3 353.2 408 370.4 407.9 L 370.4 407.9 M 370.6 405.7 C 370.5 405.7 370.5 405.7 370.4 405.7 C 370.3 405.7 370.3 405.7 370.2 405.7 L 370.2 405.7 C 350.7 405.9 345.8 417.3 343.8 421.3 C 341.6 425.4 344.6 428.9 344.6 428.9 L 353.6 441.5 L 370.4 441.5 L 387.2 441.5 L 396.2 428.9 C 396.2 428.9 399.2 425.4 397 421.3 C 395 417.3 390.1 405.9 370.6 405.7 L 370.6 405.7 L 370.6 405.7Z"
            var body_path="m 446.00334,461.65448 c 0,6.6523 -5.66677,12.10503 -12.58024,12.10503 l -121.949,0 c -6.91346,0 -12.58023,-5.45273 -12.58023,-12.10503 l 0,-68.70416 c 0,-6.65231 5.66677,-12.10502 12.58023,-12.10502 l 121.949,0 c 6.91347,0 12.58024,5.45271 12.58024,12.10502 l 0,68.70416 z";            
            topone_path="M360.208375,288.91257a11.673555,8.3971758 0 1,0 23.34711,0a11.673555,8.3971758 0 1,0 -23.34711,0";
            var head_path="M 309.4 287.6 L 431.9 287.6 L 431.9 374 L 309.4 374 L 309.4 287.6";
            var mone_path="M 335.8 353.6 L 344.8 353.6 L 344.8 362.2 L 335.8 362.2 L 335.8 353.6";
            var mtwo_path="M 350.5 353.6 L 359.4 353.6 L 359.4 362.2 L 350.5 362.2 L 350.5 353.6";
            var mthree_path="M 365.1 353.6 L 374 353.6 L 374 362.2 L 365.1 362.2 L 365.1 353.6";
            var mfour_path="M 379.8 353.6 L 388.8 353.6 L 388.8 362.2 L 379.8 362.2 L 379.8 353.6";
            var mfive_path="M 394.4 353.6 L 403.4 353.6 L 403.4 362.2 L 394.4 362.2 L 394.4 353.6";
            var lhone_path="m 298.55387,406.47304 c 0,2.50824 -2.04004,4.47123 -4.64676,4.47123 l 0,0 c -2.60672,0 -4.64676,-1.96299 -4.64676,-4.47123 l 0,-12.32313 c 0,-2.50825 2.15337,-4.47122 4.64676,-4.47122 l 0,0 c 2.60672,0 4.64676,2.07202 4.64676,4.47122 l 0,12.32313 z";
            var lhtwo_path="m 289.82703,423.4855 c 0,2.6173 -2.15337,4.68933 -4.87343,4.68933 l 0,0 c -2.72005,0 -4.87343,-2.07203 -4.87343,-4.68933 l 0,-27.59072 c 0,-2.61729 2.15338,-4.68934 4.87343,-4.68934 l 0,0 c 2.72006,0 4.87343,2.07205 4.87343,4.68934 l 0,27.59072 z";
            var lhthree_path="M277.4734611,433.84564a6.8001289,6.5432534 0 1,0 13.6002578,0a6.8001289,6.5432534 0 1,0 -13.6002578,0";
            var lhfour_path="m 289.82703,472.99611 c 0,2.61732 -2.15337,4.68934 -4.87343,4.68934 l 0,0 c -2.72005,0 -4.87343,-2.07202 -4.87343,-4.68934 l 0,-27.59071 c 0,-2.61731 2.15338,-4.68932 4.87343,-4.68932 l 0,0 c 2.72006,0 4.87343,2.07201 4.87343,4.68932 l 0,27.59071 z";
            var lhfive_path="m 274.30006,479.32127 c 0,0 -0.22668,-14.83138 9.18018,-14.83138 9.40685,0 11.78689,7.08853 11.78689,16.46719 0,0 -0.90668,3.38067 -3.28673,3.38067 -2.38004,0 0.22667,-6.32513 -1.47336,-7.96095 -1.70003,-1.63582 -3.5134,1.96297 -3.5134,6.32515 0,4.47122 -5.32676,3.59878 -8.95351,3.59878 -3.62674,0 -3.74007,-1.85392 -3.74007,-6.97946 z";
            var middleye_path="m 417.32946,324.68237 c 0,6.65231 -5.66677,12.10502 -12.58024,12.10502 l -68.79465,0 c -6.91346,0 -12.58023,-5.45271 -12.58023,-12.10502 l 0,-4.25311 c 0,-6.65231 5.66677,-12.10503 12.58023,-12.10503 l 68.79465,0 c 6.91347,0 12.58024,5.45272 12.58024,12.10503 l 0,4.25311 z";
            var llone_path="M 321 478.8 L 349.2 478.8 L 349.2 562.6 L 321 562.6 L 321 478.8";
            var lltwo_path="m 355.67495,516.07254 c 0,5.23461 -4.42009,9.37866 -9.74685,9.37866 l -22.3271,0 c -5.44009,0 -9.74684,-4.25311 -9.74684,-9.37866 l 0,0 c 0,-5.2346 4.42008,-9.37866 9.74684,-9.37866 l 22.3271,0 c 5.44011,-0.10899 9.74685,4.14406 9.74685,9.37866 l 0,0 z";
            var llthree_path="m 335.27457,553.15097 c 12.46689,0 22.44041,7.85192 22.44041,19.84787 l -44.99418,0 c 0.1133,-11.99595 10.08686,-19.84787 22.55377,-19.84787 z";
            var rlone_path="'M 396.1 478.8 L 424.4 478.8 L 424.4 562.6 L 396.1 562.6 L 396.1 478.8";
            var rltwo_path="m 430.81639,516.07254 c 0,5.23461 -4.42009,9.37866 -9.74687,9.37866 l -22.32709,0 c -5.4401,0 -9.74684,-4.25311 -9.74684,-9.37866 l 0,0 c 0,-5.2346 4.42008,-9.37866 9.74684,-9.37866 l 22.32709,0 c 5.44011,-0.10899 9.74687,4.14406 9.74687,9.37866 l 0,0 z";
            var rlthree_path="m 410.41599,553.15097 c 12.46691,0 22.44043,7.85192 22.44043,19.84787 l -44.9942,0 c 0.1133,-11.99595 10.08686,-19.84787 22.55377,-19.84787 z";
            var leone_path="M329.94781400000005,323.04657a10.653536,10.251097 0 1,0 21.307072,0a10.653536,10.251097 0 1,0 -21.307072,0";
            var letwo_path="M332.8945294,323.15558a8.0468206,7.7428498 0 1,0 16.0936412,0a8.0468206,7.7428498 0 1,0 -16.0936412,0";
            var lethree_path="M337.8812663,322.9375a3.1733937,3.0535185 0 1,0 6.3467874,0a3.1733937,3.0535185 0 1,0 -6.3467874,0";
            var lefour_path="M341.7346556,322.39221a2.1533744,2.0720305 0 1,0 4.3067488,0a2.1533744,2.0720305 0 1,0 -4.3067488,0";
            var reone_path="m 378.34204,323.04656 c 0,-10.68731 8.95351,-19.3026 20.06039,-19.3026 11.10688,0 20.06038,8.61529 20.06038,19.3026 0,10.6873 -8.9535,19.30259 -20.06038,19.30259 -10.99355,0 -20.06039,-8.61529 -20.06039,-19.30259 z";
            var retwo_path="m 383.89549,323.26467 c 0,-8.07002 6.80013,-14.61328 15.18695,-14.61328 8.38682,0 15.18696,6.54326 15.18696,14.61328 0,8.07001 -6.80014,14.61325 -15.18696,14.61325 -8.38682,0 -15.18695,-6.54324 -15.18695,-14.61325 z";
            var rethree_path="M393.4156645,322.82843a5.8934455,5.6708202 0 1,0 11.786891,0a5.8934455,5.6708202 0 1,0 -11.786891,0";
            var refour_path="m 400.78248,321.73791 c 0,-2.07203 1.81337,-3.8169 3.96674,-3.8169 2.15337,0 3.96674,1.74487 3.96674,3.8169 0,2.07203 -1.81337,3.8169 -3.96674,3.8169 -2.15337,0 -3.96674,-1.74487 -3.96674,-3.8169 z";
            
            // var righthand=paper.set();
            // righthand.push{
                rtwo_path="m 453.03014,375.39258 c 0,-2.6173 2.15337,-4.68932 4.87343,-4.68932 l 0,0 c 2.72004,0 4.87342,2.07202 4.87342,4.68932 l 0,27.59073 c 0,2.6173 -2.15338,4.68932 -4.87342,4.68932 l 0,0 c -2.72006,0 -4.87343,-2.07202 -4.87343,-4.68932 l 0,-27.59073 z";
                rthree_path="M451.7834611,365.03244a6.8001289,6.5432534 0 1,0 13.6002578,0a6.8001289,6.5432534 0 1,0 -13.6002578,0";
                rfour_path="m 453.03014,325.77291 c 0,-2.6173 2.15337,-4.68933 4.87343,-4.68933 l 0,0 c 2.72004,0 4.87342,2.07203 4.87342,4.68933 l 0,27.59073 c 0,2.6173 -2.15338,4.68932 -4.87342,4.68932 l 0,0 c -2.72006,0 -4.87343,-2.07202 -4.87343,-4.68932 l 0,-27.59073 z";
                rfive_path="m 468.5571,319.55683 c 0,0 0.22667,14.83138 -9.18017,14.83138 -9.40685,0 -11.7869,-7.08853 -11.7869,-16.4672 0,0 0.90668,-3.38069 3.28674,-3.38069 2.38003,0 -0.22668,6.32516 1.47335,7.96096 1.70004,1.63581 3.51341,-1.96298 3.51341,-6.32514 0,-4.47122 5.32676,-3.59879 8.95349,-3.59879 3.74008,0 3.74008,1.85392 3.74008,6.97948 z";
            // }
            var rone_path="m 444.41664,392.40505 c 0,-2.50826 2.04004,-4.47122 4.64675,-4.47122 l 0,0 c 2.60672,0 4.64675,1.96296 4.64675,4.47122 l 0,12.32312 c 0,2.50824 -2.15337,4.47124 -4.64675,4.47124 l 0,0 c -2.60671,0 -4.64675,-1.963 -4.64675,-4.47124 l 0,-12.32312 z";  
            var needle_path="M 365.8 438.4 L 361.5 422.7 L 374.5 438.5 L 365.8 438.4";  
            // var head_path=rect(86.370941, 122.51567, 287.60394, 309.43405);



            var toptwo_path_scaled=Raphael.transformPath(toptwo_path, transformation);
            var meter_path_scaled=Raphael.transformPath(meter_path, transformation);
            var meterouter_path_scaled=Raphael.transformPath(meterouter_path, transformation);
            var body_path_scaled=Raphael.transformPath(body_path, transformation);   
            topone_path_scaled=Raphael.transformPath(topone_path, transformation);
            var head_path_scaled=Raphael.transformPath(head_path, transformation);
            var mone_path_scaled=Raphael.transformPath(mone_path, transformation);
            var mtwo_path_scaled=Raphael.transformPath(mtwo_path, transformation);
            var mthree_path_scaled=Raphael.transformPath(mthree_path, transformation);
            var mfour_path_scaled=Raphael.transformPath(mfour_path, transformation);
            var mfive_path_scaled=Raphael.transformPath(mfive_path, transformation);
            var lhone_path_scaled=Raphael.transformPath(lhone_path, transformation);
            var lhtwo_path_scaled=Raphael.transformPath(lhtwo_path, transformation);
            var lhfour_path_scaled=Raphael.transformPath(lhfour_path, transformation);
            var lhthree_path_scaled=Raphael.transformPath(lhthree_path, transformation);
            var lhfive_path_scaled=Raphael.transformPath(lhfive_path, transformation);
            var middleye_path_scaled=Raphael.transformPath(middleye_path, transformation);
            var llone_path_scaled=Raphael.transformPath(llone_path, transformation);
            var lltwo_path_scaled=Raphael.transformPath(lltwo_path, transformation);
            var llthree_path_scaled=Raphael.transformPath(llthree_path, transformation);
            var rlone_path_scaled=Raphael.transformPath(rlone_path, transformation);
            var rltwo_path_scaled=Raphael.transformPath(rltwo_path, transformation);
            var rlthree_path_scaled=Raphael.transformPath(rlthree_path, transformation);
            var leone_path_scaled=Raphael.transformPath(leone_path, transformation);
            var letwo_path_scaled=Raphael.transformPath(letwo_path, transformation);
            var lethree_path_scaled=Raphael.transformPath(lethree_path, transformation);
            var lefour_path_scaled=Raphael.transformPath(lefour_path, transformation);
            var reone_path_scaled=Raphael.transformPath(reone_path, transformation);
            var retwo_path_scaled=Raphael.transformPath(retwo_path, transformation);
            var rethree_path_scaled=Raphael.transformPath(rethree_path, transformation);
            var refour_path_scaled=Raphael.transformPath(refour_path, transformation);
            rtwo_path_scaled=Raphael.transformPath(rtwo_path, transformation);
            rthree_path_scaled=Raphael.transformPath(rthree_path, transformation);
            rfour_path_scaled=Raphael.transformPath(rfour_path, transformation);
            rfive_path_scaled=Raphael.transformPath(rfive_path, transformation);
            var rone_path_scaled=Raphael.transformPath(rone_path, transformation);
            var needle_path_scaled=Raphael.transformPath(needle_path, transformation);
            // var head_path_scaled=Raphael.transformPath(head_path, transformation);


            var body=paper.path(body_path_scaled);          
            body.attr({fill: options.teal_color, "stroke-width": 0});
            var meter=paper.path(meter_path_scaled);
            meter.attr({fill: options.brown_color, "stroke-width": 0}); 
            var meterouter=paper.path(meterouter_path_scaled);
            meterouter.attr({fill: options.yellow_color, "stroke-width": 0}); 
            toptwo=paper.path(toptwo_path_scaled);
            toptwo.attr({fill: options.darkteal_color, "stroke-width": 0});
            topone=paper.path(topone_path_scaled);
            topone.attr({fill: options.darkteal_color, "stroke-width": 0});
            var head=paper.path(head_path_scaled);
            head.attr({fill: options.teal_color, "stroke-width": 0});
            var mone=paper.path(mone_path_scaled);
            mone.attr({fill: options.yellow_color, "stroke-width": 0});
            var mtwo=paper.path(mtwo_path_scaled);
            mtwo.attr({fill: options.yellow_color, "stroke-width": 0});
            var mthree=paper.path(mthree_path_scaled);
            mthree.attr({fill: options.yellow_color, "stroke-width": 0});
            var mfour=paper.path(mfour_path_scaled);
            mfour.attr({fill: options.yellow_color, "stroke-width": 0});
            var mfive=paper.path(mfive_path_scaled);
            mfive.attr({fill: options.yellow_color, "stroke-width": 0});
            var lhone=paper.path(lhone_path_scaled);
            lhone.attr({fill: options.orange_color, "stroke-width": 0});
            var lhtwo=paper.path(lhtwo_path_scaled);
            lhtwo.attr({fill: options.skin_color, "stroke-width": 0});
            var lhfour=paper.path(lhfour_path_scaled);
            lhfour.attr({fill: options.skin_color, "stroke-width": 0});
            var lhthree=paper.path(lhthree_path_scaled);
            lhthree.attr({fill: options.brown_color, "stroke-width": 0});
            var lhfive=paper.path(lhfive_path_scaled);
            lhfive.attr({fill: options.teal_color, "stroke-width": 0});
            var middleye=paper.path(middleye_path_scaled);
            middleye.attr({fill: options.darkteal_color, "stroke-width": 0});
            var llone=paper.path(llone_path_scaled);
            llone.attr({fill: options.teal_color, "stroke-width": 0});
            var lltwo=paper.path(lltwo_path_scaled);
            lltwo.attr({fill: options.yellow_color, "stroke-width": 0});
            var llthree=paper.path(llthree_path_scaled);
            llthree.attr({fill: options.orange_color, "stroke-width": 0});
            var rlone=paper.path(rlone_path_scaled);
            rlone.attr({fill: options.teal_color, "stroke-width": 0});
            var rltwo=paper.path(rltwo_path_scaled);
            rltwo.attr({fill: options.yellow_color, "stroke-width": 0});
            var rlthree=paper.path(rlthree_path_scaled);
            rlthree.attr({fill: options.orange_color, "stroke-width": 0});
            var leone=paper.path(leone_path_scaled);
            leone.attr({fill: options.yellow_color, "stroke-width": 0});
            var letwo=paper.path(letwo_path_scaled);
            letwo.attr({fill: options.orange_color, "stroke-width": 0});
            var lethree=paper.path(lethree_path_scaled);
            lethree.attr({fill: options.brown_color, "stroke-width": 0});
            var lefour=paper.path(lefour_path_scaled);
            lefour.attr({fill: options.white_color, "stroke-width": 0});
            var reone=paper.path(reone_path_scaled);
            reone.attr({fill: options.yellow_color, "stroke-width": 0});
            var retwo=paper.path(retwo_path_scaled);
            retwo.attr({fill: options.orange_color, "stroke-width": 0});
            var rethree=paper.path(rethree_path_scaled);
            rethree.attr({fill: options.brown_color, "stroke-width": 0});
            var refour=paper.path(refour_path_scaled);
            refour.attr({fill: options.white_color, "stroke-width": 0});
            rtwo=paper.path(rtwo_path_scaled);
            rtwo.attr({fill: options.skin_color, "stroke-width": 0});
            rthree=paper.path(rthree_path_scaled);
            rthree.attr({fill: options.brown_color, "stroke-width": 0});
            rfour=paper.path(rfour_path_scaled);
            rfour.attr({fill: options.skin_color, "stroke-width": 0});
            rfive=paper.path(rfive_path_scaled);
            rfive.attr({fill: options.teal_color, "stroke-width": 0});
            var rone=paper.path(rone_path_scaled);
            rone.attr({fill: options.orange_color, "stroke-width": 0});
            var needle=paper.path(needle_path_scaled);
            needle.attr({fill: options.darkteal_color, "stroke-width": 0});

            // var myRectangles = [rtwo,rthree,rfour,rfive];
            // var myGroup = r.group(4,myRectangles);
        }
        



        var start=function(){
            if (spinning){return}else{spinning=true}
            toptwo.animate({transform: "S-1,1"},500,'easeOut');

            rtwo.rotate(3,453.26,655.49);
            rthree.rotate(3,453.26,655.49);
            rfour.rotate(3,453.26,655.49);
            rfive.rotate(3,453.26,655.49);
            
            // var center_x=(365.71)*scale_factor;
            // var center_y=(original_height-(502.86))*scale_factor;                

            // var playButtonRef = r.set().push(rtwo).push(rthree).push(rfour).push(rfive);
            // playButtonRef.rotate(3,453.26,655.49);

            // var positionrtwo='R'+20+', '+center_x+', '+center_y;  
            // var rtwoAnim=Raphael.animation({transform: posi00onrtwo}, options.time, 'linear').repeat(Infinity);
            // rtwo.animate(rtwoAnim);

            // var position='R'+360+', '+center_x+', '+center_y;
            // var anim=Raphael.animation({transform: position}, options.time, 'linear').repeat(Infinity); 
            // toptwo.animate(anim);

        }
        var stop=function(){
            if (!spinning){return}else{spinning=false}
            toptwo.stop();
            // var current_path=Raphael.transformPath(toptwo.attr('path'), toptwo.attr('transform'))
            // toptwo.attr({path: current_path, transform: ''});    
        }

        return {

            start: start,
            stop: stop,
            init: init,
            options: options
        }
}());
