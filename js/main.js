var lastScrollTop = 0;

window.addEventListener('DOMContentLoaded', function () {

    var scrollTop = $(this).scrollTop();

    setTimeout(() => {
        $('.light_01').addClass('on');
    },200)
    setTimeout(() => {
        $('.memo01_01').addClass('on');
        $('.memo02_01').addClass('on');
        $('.memo03_01').addClass('on');
        $('.memo04_01').addClass('on');
        $('.plant02_01').addClass('on');
        $('.board_01').addClass('on');
    },500)



    $("#container").each(function () {
        var contentIndex = $(this).attr("id");
        if(scrollTop >= $(this).offset().top) {
            $(".scroll_03 a").removeClass("on");
            $(".scroll_03 a[href=#"+contentIndex+"]").addClass("on");
        }
    })


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        // $('.posNum').html(scrollTop)


        if(scrollTop >= 0){
            $('.maintitle_01').addClass('on');
        }
        if(scrollTop >= 600){
            $('.rabbit_01').addClass('on');
        }
        if(scrollTop >= 600){
            $('.squirrel_01').addClass('on');
        }
        // if(scrollTop >= 600){
        //     $('.laptop_01').addClass('on');
        // }
        if(scrollTop >= 1100){
            $('.chair_01').addClass('on');
        } 
        if(scrollTop >= 1200){
            $('.overview_01').addClass('on');
        }
        if(scrollTop >= 1400){
            $('.question_01').addClass('on');
        }
        if(scrollTop >= 1800){
            $('.rabbit02_01').addClass('on');
        }
        if(scrollTop >= 1800){
            $('.background_text_01').addClass('on');
        }
        if(scrollTop >= 1800){
            $('.background02_01').addClass('on');
        }
        if(scrollTop >= 2300){
            $('.research_rabbit_02').addClass('on');
        }
        if(scrollTop >= 2500){
            $('.desk_research_02').addClass('on');
        }
        if(scrollTop >= 2800){
            $('.research01_02').addClass('on');
        }
        if(scrollTop >= 2900){
            $('.research02_02').addClass('on');
        }
        if(scrollTop >= 3000){
            $('.research03_02').addClass('on');
        }
        if(scrollTop >= 3400){
            $('.user_research_02').addClass('on');
        }
        if(scrollTop >= 3700){
            $('.research04_02').addClass('on');
        }
        if(scrollTop >= 3800){
            $('.research05_02').addClass('on');
        }
        if(scrollTop >= 4500){
            $('.text_02').addClass('on');
        }

        if(scrollTop >= 4900){
            $('.light01_03').addClass('on');
        }
        if(scrollTop >= 4900){
            $('.light02_03').addClass('on');
        }
        if(scrollTop >= 5200){
            $('.user_interview_03').addClass('on');
        }
        if(scrollTop >= 5600){
            $('.user01_03').addClass('on');
        }
        if(scrollTop >= 5600){
            $('.user02_03').addClass('on');
        }
        if(scrollTop >= 5900){
            $('.user03_03').addClass('on');
        }
        if(scrollTop >= 6261){
            $('.rabbit_03').addClass('on');
        }
        if(scrollTop >= 6900){
            $('.persona_04').addClass('on');
        }
        if(scrollTop >= 7300){
            $('.persona01_04').addClass('on');
        }
        if(scrollTop >= 8200){
            $('.persona02_04').addClass('on');
        }

        if(scrollTop >= 7700){
            $('.tape01_04').addClass('on');
        }
        if(scrollTop >= 7700){
            $('.tape02_04').addClass('on');
        }
        if(scrollTop >= 8500){
            $('.tape03_04').addClass('on');
        }
        if(scrollTop >= 8500){
            $('.tape04_04').addClass('on');
        }
        if(scrollTop >= 9300){
            $('.problem_05').addClass('on');
        }
        if(scrollTop >= 9700){
            $('.problem_solution_05').addClass('on');
        }
        if(scrollTop >= 10400){
            $('.service_05').addClass('on');
        }
        if(scrollTop >= 10879){
            $('.text_05').addClass('on');
        }

        if(scrollTop >= 11263){
            $('.style_guide_06').addClass('on');
        }
        if(scrollTop >= 11833){
            $('.color_06').addClass('on');
        }
        if(scrollTop >= 12000){
            $('.typography_06').addClass('on');
        }
        if(scrollTop >= 12991){
            $('.flowchart_06').addClass('on');
        }
        if(scrollTop >= 13200){
            $('.flowchart_bg_06').addClass('on');
        }
        if(scrollTop >= 13200){
            $('.flowchart_bg_06').addClass('on');
        }
        if(scrollTop >= 15000){
            $('.maintitle_07').addClass('on');
        }
        if(scrollTop >= 15000){
            $('.rabbit_07').addClass('on');
        }
        if(scrollTop >= 15800){
            $('.onborarding_img_07').addClass('on');
        }
        if(scrollTop >= 16000){
            $('.text_07').addClass('on');
        }
        if(scrollTop >= 16600){
            $('.onboarding_text_07').addClass('on');
        }
        if(scrollTop >= 17300){
            $('.maintitle_08').addClass('on');
        }
        if(scrollTop >= 16600){
            $('.onboarding_text_07').addClass('on');
        }
        if(scrollTop >= 17300){
            $('.maintitle_08').addClass('on');
        }
        if(scrollTop >= 18000){
            $('.background01_08').addClass('on');
        }
        if(scrollTop >= 17900){
            $('.background02_08').addClass('on');
        }
        if(scrollTop >= 18300){
            $('.login_text_08').addClass('on');
        }
        if(scrollTop >= 18600){
            $('.signup_text_08').addClass('on');
        }
        if(scrollTop >= 18700){
            $('.edit_08').addClass('on');
        }
        if(scrollTop >= 19300){
            $('.maintitle_09').addClass('on');
        }
        if(scrollTop >= 19800){
            $('.circle01_09').addClass('on');
        }
        if(scrollTop >= 21700){
            $('.circle02_09').addClass('on');
        }
        if(scrollTop >= 20000){
            $('.main_image02_09').addClass('on');
        }
        if(scrollTop >= 20800){
            $('.text01_09').addClass('on');
        }
        if(scrollTop >= 21250){
            $('.text02_09').addClass('on');
        }
        if(scrollTop >= 21400){
            $('.text03_09').addClass('on');
        }
        if(scrollTop >= 21700){
            $('.rabbit01_09').addClass('on');
        }
        if(scrollTop >= 22000){
            $('.text04_09').addClass('on');
        }
        if(scrollTop >= 22500){
            $('.text05_09').addClass('on');
        }
        if(scrollTop >= 22600){
            $('.rabbit02_09').addClass('on');
        }

        if(scrollTop >= 23300){
            $('.maintitle_10').addClass('on');
        }
        if(scrollTop >= 23700){
            $('.image04_10').addClass('on');
        }
        if(scrollTop >= 23700){
            $('.rabbit_10').addClass('on');
        }
        if(scrollTop >= 23800){
            $('.text02_10').addClass('on');
        }
        if(scrollTop >= 24050){
            $('.circle_10').addClass('on');
        }
        if(scrollTop >= 24400){
            $('.text03_10').addClass('on');
        }
        if(scrollTop >= 24600){
            $('.text01_10').addClass('on');
        }
       
        if(scrollTop >= 25500){
            $('.maintitle_11').addClass('on');
        }
        if(scrollTop >= 26000){
            $('.image02_11').addClass('on');
        }
        if(scrollTop >= 26000){
            $('.text02_11').addClass('on');
        }
        if(scrollTop >= 26250){
            $('.text01_11').addClass('on');
        }
        if(scrollTop >= 26400){
            $('.text03_11').addClass('on');
        }
       
        if(scrollTop >= 27700){
            $('.maintitle_12').addClass('on');
        }
        if(scrollTop >= 28300){
            $('.image02_12').addClass('on');
        }
        if(scrollTop >= 28900){
            $('.image03_12').addClass('on');
        }
        if(scrollTop >= 29300){
            $('.text01_12').addClass('on');
        }
        if(scrollTop >= 29600){
            $('.rabbit_12').addClass('on');
        }
        if(scrollTop >= 29600){
            $('.text_circle_12').addClass('on');
        }
        if(scrollTop >= 30600){
            $('.text02_12').addClass('on');
        }
        if(scrollTop >= 30900){
            $('.text03_12').addClass('on');
        }

        if(scrollTop >= 31600){
            $('.maintitle_13').addClass('on');
        }
        if(scrollTop >= 32400){
            $('.circle_13').addClass('on');
        }
        if(scrollTop >= 32800){
            $('.text01_13').addClass('on');
        }
        if(scrollTop >= 33200){
            $('.rabbit_13').addClass('on');
        }

        if(scrollTop >= 33700){
            $('.background_14').addClass('on');
        }
        if(scrollTop >= 34000){
            $('.text_14').addClass('on');
        }
        if(scrollTop >= 34300){
            $('.image_14').addClass('on');
        }
        if(scrollTop >= 34800){
            $('.title01_footer').addClass('on');
        }
        if(scrollTop >= 34800){
            $('.title02_footer').addClass('on');
        }




        if(scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
            if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { /* &&: AND, 두 값이 모두 참이어야 값이 출력 */
                /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
                $("#header").css("top","-100px");
            } else {
                $("#header").css("top","0px");
            }
    
            lastScrollTop = scrollTop;
        } 
    



    });



    /*  slide,click event section */


    gsap.to(".arrow_02", {
        duration: 0.5, //유지시간조절
        yoyo: true,
        delay: 0,  // 이걸로 시작시간을 조절
        opacity: 0,
        yoyoEase: "power2.in",
        repeat: -1,
      });

      gsap.to(".star01_05", {
        duration: 0.8, //유지시간조절
        yoyo: true,
        delay: 0,  // 이걸로 시작시간을 조절
        opacity: 0,
        yoyoEase: "power2.in",
        repeat: -1,
      });

      gsap.to(".star02_05", {
        duration: 0.8, //유지시간조절
        yoyo: true,
        delay: 0.8,  // 이걸로 시작시간을 조절
        opacity: 0,
        yoyoEase: "power2.in",
        repeat: -1,
      });

      gsap.to(".star03_05", {
        duration: 0.8, //유지시간조절
        yoyo: true,
        delay: 0.2,  // 이걸로 시작시간을 조절
        opacity: 0,
        yoyoEase: "power2.in",
        repeat: -1,
      });

      gsap.to(".star04_05", {
        duration: 0.8, //유지시간조절
        yoyo: true,
        delay: 0.5,  // 이걸로 시작시간을 조절
        opacity: 0,
        yoyoEase: "power2.in",
        repeat: -1,
      });
  
      gsap.to(".text_image_11", {
        // 사진 가로 크기
        x: -2019, 
        ease: "none",
        duration: 15,
        repeat: -1,
      });









})


