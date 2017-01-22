<template>
    <div>
        <h4>Initiation</h4>
        <p>After diagnose a patient with diabetes you can initiate treatment by the following algorithm.</p>

        <div class="list-group">
            <div class="list-group-item list-group-item-success text-center"><strong>Type 1 DM</strong></div>
            <div class="list-group-item">
                Start Insulin replacement along with lifestyle modification.
            </div>
        </div>

        <div class="list-group">
            <div class="list-group-item list-group-item-success text-center"><strong>Type 2 DM</strong></div>
            <div class="list-group-item">
                Rx regimen may very according to the state of disease and need to be changed with time. 
                To initiate Rx, HbA1c or fasting glycemic status may be used by following algorithm.
            </div>
            <div class="list-group-item list-group-item-danger text-center">Category A</div>
            <div class="list-group-item text-center">
                HbA1c: <span class="text-success"><strong>&lt; 8.0%</strong></span> <br> 
                FBG: <span class="text-success"><strong>&lt; 11.1 mmol/L</strong></span> OR <span class="text-success"><strong>&lt; 200 mg/dl</strong></span><br>
                Rx option: <span class="text-primary"><strong>Lifestyle &plusmn; Metformin</strong></span>
            </div>
            <div class="list-group-item list-group-item-danger text-center">Category B</div>
            <div class="list-group-item text-center">
                HbA1c: <span class="text-success"><strong>8 to 10 %</strong></span> <br> 
                FBG: <span class="text-success"><strong>11.1 to 13.9 mmol/L</strong></span> OR <span class="text-success"><strong>200 to 250 mg/dl</strong></span><br>
                Rx option: <span class="text-primary"><strong>Lifestyle &plus; Metformin &plus; Secretogogue/other</strong></span>
            </div>
            <div class="list-group-item list-group-item-danger text-center">Category C</div>
            <div class="list-group-item text-center">
                HbA1c: <span class="text-success"><strong>&gt; 10 %</strong></span> Plus <br> 
                <div class="list-group-item text-center">
                    FBG: <span class="text-success"><strong>14 to 16.7 mmol/L</strong></span> OR <span class="text-success"><strong>252 to 300 mg/dl</strong></span><br>
                    with no symptom of hyperglycemia<br>
                    Rx option: <span class="text-primary"><strong>Lifestyle &plus; Metformin &plus; Secretogogue/other</strong></span>
                </div>
                <div class="list-group-item text-center">
                    FBG: <span class="text-success"><strong>14 to 16.7 mmol/L</strong></span> OR <span class="text-success"><strong>252 to 300 mg/dl</strong></span><br>
                    with symptom of hyperglycemia<br>
                    Rx option: <span class="text-primary"><strong>Lifestyle &plus; Metformin &plus; Insulin</strong></span>
                </div>
                <div class="list-group-item text-center">
                    FBG: <span class="text-success"><strong>&gt; 16.7 mmol/L</strong></span> OR <span class="text-success"><strong>&gt; 300 mg/dl</strong></span><br>
                    with/wothout symptom of hyperglycemia<br>
                    Rx option: <span class="text-primary"><strong>Lifestyle &plus; Metformin &plus; Insulin</strong></span>
                </div>
            </div>
        </div>
        
    </div>
</template>