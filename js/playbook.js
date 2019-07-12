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
 .filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
app.controller('controller', function ($scope) {
    $scope.selectedpopup = 0;
    $scope.selectedTab = 0;
    $scope.process_index = -1;
    $scope.tabClick = function(tabIndex){
        console.log(tabIndex);
        $scope.selectedTab = tabIndex;
    };
    $scope.process_arr = [
        {
            "text" :`
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
            "text" :`
            <h2>Assess Phase</h2>
            <p>Assess current state and identify opportunities </p>
            <p>Align with sponsors the case for change</p>
            `
        },
        {
            "text" :`
            <h2>Analyse Phase</h2>
            <p>Apply leading practices and vision to develop design criteria and ideal Operating Model</p>
            `
        },
        {
            "text" :`
            <h2>Design Phase</h2>
            <p>Test and create organizational structures</p>
            <p>Build a business case for the change</p>
            `
        },
        {
            "text" :`
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
            "text" :`
            <h2>Plan Phase</h2>
            <p>Plan transition, create risk mitigation plans and determine pace of change</p>
            `
        },
        {
            "text" :`
            <h2>Before Implement Phase and ongoing</h2>
            <p>Once the GHRS project team members are assigned, they are able to review and clarify the scope of work they need to deliver. At this point, the project team should update the estimate of their time and confirm their commitment. BHR Leader/Project Lead and GHRS BRM should plan an updated resource plan and estimations.</p>
            `
        },
        {
            "text" :`
            <h2>Implement Phase</h2>
            Transition the organization to the new structure and implement  consequential decision right, process and talent changes
            `
        },
        {
            "text" :`
            <h2>Sustain Phase</h2>
            Create sustainment plan to ensure benefits realization and long-term adoption of the changes
            `
        }
    ]
    $scope.tabs = [
        {
          img:"/sites/orgdevelopment/SiteAssets/working/p_images/tab1.png",
          head:"Business HR Leader",
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
          img:"/sites/orgdevelopment/SiteAssets/working/p_images/tab2.png",
          head:"OD Consultant",
          body:`<ul>
          <li>Facilitates the Org Design Process as an experienced org design expert</li>
          <li>Provides org design tools and templates for the design team</li>
          <li>Advises the transformational approach to minimize business disruption</li>
        </ul>`
        },
        {
          img:"/sites/orgdevelopment/SiteAssets/working/p_images/tab3.png",
          head:"GHRS Project Manager*",
          body:`<ul>
          <li>Lead assignment of resources and responsibilities to meet HR objectives </li>
          <li>Determine project requirements and timelines for HR work</li>
          <li>Coordinate HR resources and manage work across HR service areas and across functions</li>
          <li>Responsible for day to day execution, reporting and project plan</li>
        </ul>`
        },
        {
          img:"/sites/orgdevelopment/SiteAssets/working/p_images/tab4.png",
          head:"HR Teams",
          body:
          `<p>Pension & Benefits,  HR Analytics, Talent Acquisition,  Time and  Attendance/Vendor, Employee Relations/Industrial Relations,  Compensation,  Employee Experience  Change Management** , HR CBS,  Mobility,  Payroll  Local HRIS/vendor,  HR Global Data and Systems Updates*</p>
            <p>Executes HR domain expertise in the respective service areas to implement organization design and support employee changes </p>
          <p>* May include partnership with IT</p>
          <p>**Includes partnering with Corporate Affairs on communications</p>`
        }
      ];
});

$().ready(function () {

    /*$(window).on('load', function () { // makes sure the whole site is loaded 
        setTimeout(function () {
            $(".preload").remove();
            $(".homepage").fadeIn(2000);
        }, 1000)
    });*/

    $(".scroll_click").on('click', function(event) {

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
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

      $(".resp .button").click(function(){
          var id = $(this).data("id");
          $("#responsibilityModal").modal();
          $("#responsibilityModal").find("#responsibilityModalTitle").text($(this).text());
          $("#responsibilityModal").find(".child").hide();
          $("#responsibilityModal").find(".child:eq("+id+")").show();
      })
});