let totalHours = 0;
let rate = 220;

function calculateHours() {
    let numForms = parseFloat(document.getElementById("numForms").value) || 0 ;
    let numConfigurations = parseFloat(document.getElementById("numConfigurations").value) || 0;
    let numDashboards = parseFloat(document.getElementById("numDashboards").value) || 0;
    let numDemoInitial = parseFloat(document.getElementById("numDemoInitial").value) || 0;
    let numDemoAdditional = parseFloat(document.getElementById("numDemoAdditional").value) || 0;
    let numSimpleReports = parseFloat(document.getElementById("numSimpleReports").value) || 0;
    let numMediumReports = parseFloat(document.getElementById("numMediumReports").value) || 0;
    let numLargeReports = parseFloat(document.getElementById("numLargeReports").value) || 0;
    let numFieldsMigration = parseFloat(document.getElementById("numFieldsMigration").value) || 0;
    let numFieldsMerges = parseFloat(document.getElementById("numFieldsMerges").value) || 0;
    let numGoLiveSupport = parseFloat(document.getElementById("numGoLiveSupport").value) || 0;
    let numDiscovery = parseFloat(document.getElementById("numDiscovery").value) || 0;
    // Perform calculations for each field and update totalHours
    return ( 
        (numForms * 1.5) + (numConfigurations * 4) + (numDiscovery * 10) + 
        (numDashboards) + (numDemoInitial * 10) + (numDemoAdditional * 5) + 
        (numSimpleReports * 2) + (numMediumReports * 6) + (numLargeReports * 10) + 
        (numFieldsMigration /25 * 3) + (numFieldsMerges /10000 * .33) + (numGoLiveSupport)
    )

    updateTable();
}

function setHourTotal () {
    let totalHours = calculateHours();
    //Calls calculateHours to get total hours

    document.getElementById('totalHours').value = totalHours;
}

function updateTable() {
    const numFormsHours = parseFloat(document.getElementById("numForms").value * 1.5) || 0 ;
    const numConfigurationsHours = parseFloat(document.getElementById("numConfigurations").value * 4) || 0;
    const numDashboardsHours = parseFloat(document.getElementById("numDashboards").value) || 0;
    const numDemoInitialHours = parseFloat(document.getElementById("numDemoInitial").value * 10) || 0;
    const numDemoAdditionalHours = parseFloat(document.getElementById("numDemoAdditional").value * 5) || 0;
    const numSimpleReportsHours = parseFloat(document.getElementById("numSimpleReports").value * 2) || 0;
    const numMediumReportsHours = parseFloat(document.getElementById("numMediumReports").value * 6) || 0;
    const numLargeReportsHours = parseFloat(document.getElementById("numLargeReports").value * 10) || 0;
    const numFieldsMigrationHours = parseFloat((document.getElementById("numFieldsMigration").value /25) * 3) || 0;
    const numFieldsMergesHours = parseFloat(document.getElementById("numFieldsMerges").value /10000 * .33) || 0;
    const numGoLiveSupportHours = parseFloat(document.getElementById("numGoLiveSupport").value) || 0;
    const numDiscoveryHours = parseFloat(document.getElementById("numDiscovery").value * 10) || 0;
    
    let finalDiscoHours = numDiscoveryHours;
    let finalConfigHours = numFormsHours + numConfigurationsHours + numDashboardsHours;
    let finalReportHours = numSimpleReportsHours + numMediumReportsHours + numLargeReportsHours;
    let finalDataMigration = numFieldsMergesHours + numFieldsMigrationHours;
    let finalDemoTesting = numDemoAdditionalHours + numDemoInitialHours;
    let finalGoLiveSupport = numGoLiveSupportHours
    let finalProjectManagement = 5 + ((.3 * totalHours) + (2/3 * .3 * numFieldsMigrationHours + numFieldsMergesHours))

    // Update Discovery row
    document.getElementById("discovery-hours").textContent = finalDiscoHours;
    document.getElementById("discovery-hours-summary").textContent = finalDiscoHours;

    // Update Configuration row
    document.getElementById("configuration-hours").textContent = finalConfigHours;
    document.getElementById("configuration-hours-summary").textContent = finalConfigHours;

    // Update Custom Reporting row
    document.getElementById("custom-reporting-hours").textContent = finalReportHours;
    document.getElementById("custom-reporting-hours-summary").textContent = finalReportHours;

    // Update Data Migration row
    document.getElementById("data-migration-hours").textContent = finalDataMigration;
    document.getElementById("data-migration-hours-summary").textContent = finalDataMigration;

    // Update Demo and Testing row
    document.getElementById("demo-testing-hours").textContent = finalDemoTesting;
    document.getElementById("demo-testing-hours-summary").textContent = finalDemoTesting;

    // Update Go Live Support row
    document.getElementById("go-live-support-hours").textContent = finalGoLiveSupport;
    document.getElementById("go-live-support-hours-summary").textContent = finalGoLiveSupport;

    // Update Close Out row (assuming these are constants)
    document.getElementById("close-out-hours").textContent = 1;
    document.getElementById("close-out-hours-summary").textContent = 1;

    // Update Project Management row
    document.getElementById("project-management-hours").textContent = finalProjectManagement;
    document.getElementById("project-management-hours-summary").textContent = finalProjectManagement;

    // Update Total Estimate row
    let totalEstimateHours = (
                                finalDiscoHours + finalConfigHours + finalReportHours +
                                finalDataMigration + finalDemoTesting + finalGoLiveSupport +
                                1 + finalProjectManagement
                                
                             );  
    document.getElementById("total-estimate-hours").textContent = totalEstimateHours;
    document.getElementById("total-estimate-hours-summary").textContent = totalEstimateHours;

    
    // Update Fee Summary columns based on rate
    updateFeeSummary("discovery", finalDiscoHours, rate);
    updateFeeSummary("configuration", finalConfigHours, rate);
    updateFeeSummary("custom-reporting", finalReportHours, rate);
    updateFeeSummary("data-migration", finalDataMigration, rate);
    updateFeeSummary("demo-testing", finalDemoTesting, rate);
    updateFeeSummary("go-live-support", finalGoLiveSupport, rate);
    updateFeeSummary("close-out", 1, rate);
    updateFeeSummary("project-management", finalProjectManagement, rate);
    updateFeeSummary("total-estimate", totalEstimateHours, rate);

}

function updateFeeSummary(rowId, hours, rate) {
    let feeSummary = hours * rate;
    document.getElementById(`${rowId}-fee-summary`).textContent = `$${feeSummary}`;
}

function generateDocument() {
