var del = 0;
AOS.init();
/*anime.timeline({
        loop: true
    })
    .add({
        targets: '.load_text .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: function (el, i) {
            return 70 * (i + 1)
        }
    });*/

var app = angular.module('app', [])
    .filter('to_trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }]);
app.directive("navMenu", function () {
    return {
        restrict: "E",
        scope: {
            active_no: '@'
        },
        templateUrl: "menu.html"
    };
});
app.controller('controller', function ($scope) {
    $scope.selectedpopup = 0;
    $scope.selectedTab = 0;
    $scope.process_index = -1;
    $scope.before_process_index =-1;
    $scope.tabClick = function (tabIndex) {
        console.log(tabIndex);
        $scope.selectedTab = tabIndex;
    };
    $scope.process_arr = [{
            "text": `
            <h2>Before Assess Phase</h2>
            <p>BHR Leader engages the GHRS BRM in the Project Intake process. Considerations:</p>
            <ul>
                <li>Typically in a re-organization, OD is required before the rest of the GHRS team. Therefore, following this initial conversation, it is typical that the GHRS BRM would ensure that an initial consult and SOW development between BHR Leader and GHRS OD. </li>
                <li>This should happen before the assess phase and the project submitted through the Demand Process to Portfolio Review Team</li>
                <li>It is important to estimate HR resources for the entire re-organization. At the same time, we also know that work that has not been designed will not have 100% accurate estimations. We assume we can only estimate based on known information, and these estimates will need to be updated as design decisions are made, closer to plan and implementation. </li>
            </ul>
            `
        },
        {
            "text": `
            <h2>Assess Phase</h2>
            <p>Assess current state and identify opportunities </p>
            <p>Align with sponsors the case for change</p>
            `
        },
        {
            "text": `
            <h2>Analyse Phase</h2>
            <p>Apply leading practices and vision to develop design criteria and ideal Operating Model</p>
            `
        },
        {
            "text": `
            <h2>Design Phase</h2>
            <p>Test and create organizational structures</p>
            <p>Build a business case for the change</p>
            `
        },
        {
            "text": `
            <h2>Before Plan Phase</h2>
            <p>BHR Leader /Project Lead and GHRS BRM should plan to update the resource plan and estimations, based on design decisions and pace of implementation. Considerations:</p>
            <ul>
                <li>IT may also need to be brought into the conversation to understand the updated scope of systems updates and plan for the IT project.</li>
                <li>PRT approval may be required for increased scope of work or resource estimations. </li>
                <li>If design work is iterative, or regional, more frequent BHR Leader and GHRS BRM resource planning sessions may be required. </li>
            </ul>
            `
        },
        {
            "text": `
            <h2>Plan Phase</h2>
            <p>Plan transition, create risk mitigation plans and determine pace of change</p>
            `
        },
        {
            "text": `
            <h2>Before Implement Phase and ongoing</h2>
            <p>Once the GHRS project team members are assigned, they are able to review and clarify the scope of work they need to deliver. At this point, the project team should update the estimate of their time and confirm their commitment. BHR Leader/Project Lead and GHRS BRM should plan an updated resource plan and estimations.</p>
            `
        },
        {
            "text": `
            <h2>Implement Phase</h2>
            Transition the organization to the new structure and implement  consequential decision right, process and talent changes
            `
        },
        {
            "text": `
            <h2>Sustain Phase</h2>
            Create sustainment plan to ensure benefits realization and long-term adoption of the changes
            `
        }
    ]

    $scope.before_process_arr = [{
        "text": `
        <h2>Before Assess Phase</h2>
        <p>BHR Leader engages the GHRS BRM in the Project Intake process. Considerations:</p>
        <ul>
            <li>Typically in a re-organization, OD is required before the rest of the GHRS team. Therefore, following this initial conversation, it is typical that the GHRS BRM would ensure that an initial consult and SOW development between BHR Leader and GHRS OD. </li>
            <li>This should happen before the assess phase and the project submitted through the Demand Process to Portfolio Review Team</li>
            <li>It is important to estimate HR resources for the entire re-organization. At the same time, we also know that work that has not been designed will not have 100% accurate estimations. We assume we can only estimate based on known information, and these estimates will need to be updated as design decisions are made, closer to plan and implementation. </li>
        </ul>
        `
    },
    {
        "text": `
        <h2>Before Plan Phase</h2>
        <p>BHR Leader /Project Lead and GHRS BRM should plan to update the resource plan and estimations, based on design decisions and pace of implementation. Considerations:</p>
        <ul>
            <li>IT may also need to be brought into the conversation to understand the updated scope of systems updates and plan for the IT project.</li>
            <li>PRT approval may be required for increased scope of work or resource estimations. </li>
            <li>If design work is iterative, or regional, more frequent BHR Leader and GHRS BRM resource planning sessions may be required. </li>
        </ul>
        `
    },
    {
        "text": `
        <h2>Before Implement Phase and ongoing</h2>
        <p>Once the GHRS project team members are assigned, they are able to review and clarify the scope of work they need to deliver. At this point, the project team should update the estimate of their time and confirm their commitment. BHR Leader/Project Lead and GHRS BRM should plan an updated resource plan and estimations.</p>
        `
    }
]
    $scope.tabs = [{
            img: "images/tab1.png",
            head: "Business HR Leader",
            body: `
          <ul>
            <li>Provides strategic leadership and expertise for the business</li>
            <li>Sets HR strategy and governance for all people deliverables on project</li>
            <li>HR deliverable approver and escalation for HR barriers</li>
            <li>Ownership & accountability for HR delivery</li>
            <li>Communicate key implications from business strategy to the HR project team</li>
            <li>Monitor progress and adjust HR functional strategy as needed to optimize performance</li>
            <li>Could be involved in facilitating talent assessment for Macro Org</li>
          </ul>`
        },
        {
            img: "images/tab2.png",
            head: "OD Consultant",
            body: `<ul>
          <li>Facilitates the Org Design Process as an experienced org design expert</li>
          <li>Provides org design tools and templates for the design team</li>
          <li>Advises the transformational approach to minimize business disruption</li>
        </ul>`
        },
        {
            img: "images/tab3.png",
            head: "GHRS Project Manager*",
            body: `<ul>
          <li>Lead assignment of resources and responsibilities to meet HR objectives </li>
          <li>Determine project requirements and timelines for HR work</li>
          <li>Coordinate HR resources and manage work across HR service areas and across functions</li>
          <li>Responsible for day to day execution, reporting and project plan</li>
        </ul>`
        },
        {
            img: "images/tab4.png",
            head: "HR Teams",
            body: `<p>Pension & Benefits,  HR Analytics, Talent Acquisition,  Time and  Attendance/Vendor, Employee Relations/Industrial Relations,  Compensation,  Employee Experience  Change Management** , HR CBS,  Mobility,  Payroll  Local HRIS/vendor,  HR Global Data and Systems Updates*</p>
            <p>Executes HR domain expertise in the respective service areas to implement organization design and support employee changes </p>
          <p>* May include partnership with IT</p>
          <p>**Includes partnering with Corporate Affairs on communications</p>`
        }
    ];

    $scope.partner_tabs = [{
            img: "images/user_1_md.png",
            head: "Business HR Leader",
            body: `
          <h3>Business HR Leader </h3>
            <ul class="text-left pb-5 pr-5">
                <li>Provides strategic leadership and expertise for the business; Strategic BHR Role
                    LT level
                    activities</li>
                <li>Sets HR strategy and governance for all people deliverables on project</li>
                <li>HR deliverable approver and escalation for HR barriers</li>
                <li>Ownership & accountability for HR delivery</li>
                <li>Communicate key implications from business strategy to the project team</li>
                <li>Monitor progress and adjust HR functional strategy as needed to optimize
                    performance</li>
                <li>Provides leadership and expertise on efficient people measures</li>
            </ul>`
        },
        {
            img: "images/user_2_md.png",
            head: "Business Project Design Team",
            body: `<h3>Business Project Design Team </h3>
          <ul class="text-left">
              <li>Responsible for the project deliverables</li>
              <li>Maintains an appropriate level of stakeholder engagement throughout the various
                  project phases
              </li>
              <li>Develops detailed recommendations for leadership team approval in accordance
                  with stage gate
                  requirements</li>
              <li>Conducts analysis to support: org design, span and layers optimization as
                  related to an op model,
                  spans and layers or org restructure business need and primarily responsible for
                  financial modeling
                  and
                  process for tracking value</li>
          </ul>`
        },
        {
            img: "images/user_3_md.png",
            head: "Business Leaders",
            body: `<h3>Business Leaders</h3>
          <ul class="text-left">
              <li>Provides leadership and expertise on efficient organizational measures,
                  comparison to
                  competitors
                  or internal Cargill benchmarks for business</li>
              <li>Responsible to achieve cost/benefit value and any other key measures identified
                  for project/team
                  success</li>
          </ul>`
        },
        {
            img: "images/user_4_md.png",
            head: "Managers",
            body: `<h3>Managers</h3>
          <ul class="text-left">
              <li>Provides strategic leadership and expertise for the business/department</li>
              <li>Recommends key deliverables for their team to Business/Function Lead</li>
              <li>Responsible for implementation of changes in team</li>
              <li>Responsible for accurate HR data for their team</li>
              <li>Responsible for partnering with Finance to track cost/benefit value and any
                  other key measures
                  identified for project success</li>
              <li>Communication of change impacts to employee populations and individuals</li>
          </ul>`
        }
    ];
    $scope.domain_click = function (d) {
        $scope.selectedDomain = d.filling;
        $scope.selectedDomainTitle = d.text;
    }
    $scope.selectedDomainTitle = "";
    $scope.selectedDomain = [0, 0, 0, 0, 0, 0]
    $scope.domains = [{
            text: "Global Compensation",
            filling: [3, 3, 3, 2, 2, 2]
        },
        {
            text: "Global Mobility",
            filling: [0, 0, 0, 1, 1, 1]
        },
        {
            text: "Talent Acquisition Domain",
            filling: [0, 0, 0, 2, 2, 2]
        },
        {
            text: "TP Domain - OD",
            filling: [2, 2, 2, 2, 2, 2]
        },
        {
            text: "TP Domain - Performance",
            filling: [0, 0, 0, 0, 1, 1]
        },
        {
            text: "TP Domain - L&D",
            filling: [0, 0, 0, 3, 1, 1]
        },
        {
            text: "GHRS Project Manager",
            filling: [1, 1, 1, 1, 1, 1]
        },
        {
            text: "Employee Experience",
            filling: [0, 0, 0, 2, 2, 2]
        },
        {
            text: "ER/IR",
            filling: [3, 3, 3, 2, 2, 2]
        },
        {
            text: "HR Operations",
            filling: [0, 0, 0, 2, 2, 2]
        },
        {
            text: "HR Ops - Benefits",
            filling: [0, 0, 0, 2, 2, 2]

        },
        {
            text: "HR Ops - Payroll",
            filling: [0, 0, 0, 2, 2, 2]
        },
        {
            text: "HR Ops - Time/Attendance",
            filling: [0, 0, 0, 2, 2, 2]
        },
        {
            text: "HR Process, Data & Technology",
            filling: [0, 0, 0, 2, 2, 0]
        },
        {
            text: "Business HR",
            filling: [2, 2, 2, 2, 2, 2]
        },
        {
            text: "BRM",
            filling: [3, 3, 3, 3, 3, 3]

        },
        {
            text: "Domain",
            class:'d_heading'
        },
        {
            text: "IT",
            filling: [0, 0, 3, 1, 1, 0]
        }

    ]
    $scope.process = [{
            text: "Assess"
        },
        {
            text: "Analyze"
        },
        {
            text: "Design"
        },
        {
            text: "Plan"
        },
        {
            text: "Implement"
        },
        {
            text: "Sustain"
        }
    ]
});

$().ready(function () {

    //scormBroker.Complete('completed');

    var menuarr = ['#introduction', '#partnering', '#org_design', '#assess'];
    var arrowArr = ['#introduction', '#menu-tile', '#partnering', '#hrteam', '#responsibility', '#org_design',  '#process_overview', '#ghrs_before', '#region_diagram', '#region_table', '#assess', '#design', '#implement'];
    //var init = $("#navbar").offset().top;
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= $("#introduction").offset().top) {
            $(".arrow_nav").fadeIn(1000)
        } else {
            $(".arrow_nav").fadeOut(500)
        }

        for (var i = 0; i < menuarr.length; i++) {
            if (scrollTop >= $(menuarr[i]).offset().top - 10) {
                $(".navbar-nav > li").removeClass("active");
                $(".navbar-nav > li").eq(i).addClass("active");
            }
            //console.log(menuarr[i], $(menuarr[i]).offset().top);
        }

        for (var i = 0; i < arrowArr.length; i++) {
            if (scrollTop >= $(arrowArr[i]).offset().top - 10) {
                page_no = i;
                if (i == 0) {
                    $("#side_up").hide();
                    $("#side_down").show();
                } else if (i == arrowArr.length - 1) {
                    $("#side_down").hide();
                    $("#side_up").show();
                } else {
                    $("#side_up").show();
                    $("#side_down").show();
                }
            }
            //console.log(menuarr[i], $(menuarr[i]).offset().top);
        }
    });
    $(window).scroll();

    $(".scroll_click").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(".resp .button").click(function () {
        var id = $(this).data("id");
        $("#responsibilityModal").modal();
        $("#responsibilityModal").find("#responsibilityModalTitle").text($(this).text());
        $("#responsibilityModal").find(".child").hide();
        $("#responsibilityModal").find(".child:eq(" + id + ")").show();
    })


    var page_no = 0;
    $("#side_up").click(function (event) {
        event.preventDefault();
        page_no--;
        if (page_no == -1) {
            page_no = 0;
            animateTo("#top")
        } else {
            animateTo(arrowArr[page_no])
        }
    })

    $("#side_down").click(function (event) {
        event.preventDefault();
        page_no++;
        if (page_no == arrowArr.length) {
            page_no = arrowArr.length - 1;
        } else {
            animateTo(arrowArr[page_no])
        }
    })

    function animateTo(id) {
        console.log(id);
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = id;
        });
    }

});