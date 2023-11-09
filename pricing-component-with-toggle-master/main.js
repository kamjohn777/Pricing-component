

  $(function() {
    $('#flexSwitchCheckDefault').on('change', function() {
        // This function will be called whenever the toggle is switched
        let isMonthly = $(this).is(':checked');
        
        $('.price').each(function() {
            let annualPrice = $(this).data('annual');
            let monthlyPrice = $(this).data('monthly');
            
            // Update the content based on the toggle position
            $(this).text(isMonthly ? monthlyPrice : annualPrice);
        });

          // Update the plan type text based on the toggle position
          $('.plan-type').each(function() {
            var annualPlan = $(this).data('annual');
            var monthlyPlan = $(this).data('monthly');
            $(this).text(isMonthly ? monthlyPlan : annualPlan);
        });


           // Update the professional-plan price text based on the toggle position
           $('.professional-plan').each(function() {
            let annualPrice = $(this).data('annual');
            let monthlyPrice = $(this).data('monthly');
            
            // Update the content based on the toggle position
            $(this).text(isMonthly ? monthlyPrice : annualPrice);
        });

        // Update the pro-plan type text based on the toggle position
        $('.pro-plan').each(function() {
            var annualPlan = $(this).data('annual');
            var monthlyPlan = $(this).data('monthly');
            $(this).text(isMonthly ? monthlyPlan : annualPlan);
        });


          // Update the master-price text based on the toggle position
          $('.master-price').each(function() {
            let annualPrice = $(this).data('annual');
            let monthlyPrice = $(this).data('monthly');
            
            // Update the content based on the toggle position
            $(this).text(isMonthly ? monthlyPrice : annualPrice);
        });

        // Update the master-plan-type text based on the toggle position
        $('.master-plan-type').each(function() {
            var annualPlan = $(this).data('annual');
            var monthlyPlan = $(this).data('monthly');
            $(this).text(isMonthly ? monthlyPlan : annualPlan);
        });

    });
});
