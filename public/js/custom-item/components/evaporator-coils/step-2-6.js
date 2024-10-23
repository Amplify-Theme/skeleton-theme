export default  {
    name : 'step-2-6',
    template : `
      <div>
        <!--STEP 02-->
        <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
          <div class="col-md-6">
            <div class="title mb-3 d-flex align-items-center gap-2">
              <i :class="stepTwo ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
              <h5 class="mb-0 text-danger text-uppercase fw-600">Step 02</h5>
            </div>
            <div class="border rounded-md d-flex align-items-center justify-content-between p-3">
              <div class="fw-500">COIL IS COATED: <span class="text-danger">*</span></div>
              <div class="d-flex gap-3">
                <div class="form-check">
                  <input :disabled="stepOneValue" v-model="$parent.stepTwo" value="yes"
                         class="form-check-input custom-radio-color" type="radio" name="step-" id="step-1">
                  <label class="form-check-label" for="step-1">Yes</label>
                </div>
                <div class="form-check">
                  <input :disabled="stepOneValue" v-model="$parent.stepTwo" value="no"
                         class="form-check-input custom-radio-color" type="radio" name="step-" id="step-2">
                  <label class="form-check-label" for="step-2">No</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!--STEP 03-->
        <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
          <div class="col-md-6">
            <div class="title mb-3 d-flex align-items-center gap-2">
              <i :class="stepThree ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
              <h5 class="mb-0 text-danger text-uppercase fw-600">Step 03</h5>
            </div>
            <div class="border rounded-md d-flex align-items-center justify-content-between p-3">
              <div>
                <div class="fw-500">COPPER TUBE O.D:</div>
                <div>O.D =Out side dimensions</div>
              </div>
              <input :disabled="!stepTwo" v-model="$parent.stepThree" type="text" placeholder="0" class="form-control w-90">
            </div>
          </div>
        </div>
        
        <!--STEP 04-->
        <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
          <div class="col-md-6">
            <div class="title mb-3 d-flex align-items-center gap-2">
              <i :class="stepFour ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
              <h5 class="mb-0 text-danger text-uppercase fw-600">Step 04</h5>
            </div>
            <div class="border rounded-md d-flex align-items-center justify-content-between p-3">
              <div>
                <div class="fw-500">NUMBER OF FINS PER INCH</div>
                <div>(6 To 7 Per Inch is Typical)</div>
              </div>
              <input :disabled="!stepThree" v-model="$parent.stepFour" type="text" placeholder="0" class="form-control w-90">
            </div>
          </div>
        </div>
        
        <!--STEP 05-->
        <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
          <div class="col-md-6">
            <div class="title mb-3 d-flex align-items-center gap-2">
              <i :class="stepFive ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
              <h5 class="mb-0 text-danger text-uppercase fw-600">Step 05</h5>
            </div>
            <div class="border rounded-md p-3">
              <div class="d-flex align-items-center mb-3 gap-3">
                <img width="100" src="../images/custom-product/p1-step-5.png" alt="">
                <div>
                  VIEW COIL END TO DETERMINE # OF TUBES THIS EXAMPLE HAS 30 TUBES
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <div class="fw-500">SELECT TOTAL NUMBER OF TUBES ON COIL END</div>
                </div>
                <input :disabled="!stepFour" v-model="$parent.stepFive" type="text" placeholder="0" class="form-control w-90">
              </div>
            </div>

          </div>
        </div>

        <!--STEP 06-->
        <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
          <div class="col-md-6">
            <div class="title mb-3 d-flex align-items-center gap-2">
              <i :class="stepSix ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
              <h5 class="mb-0 text-danger text-uppercase fw-600">Step 06</h5>
            </div>
            <div class="border rounded-md d-flex align-items-center justify-content-between p-3">
              <div>
                <div class="fw-500">QUANTITY:</div>
              </div>
              <input :disabled="!stepFive" v-model="$parent.stepSix" type="text" placeholder="0" class="form-control w-90">
            </div>

          </div>
        </div>
      
      </div>

    `,

    props:['orderStep','stepTwo','stepOneValue','stepThree','stepFour','stepFive','stepSix'],
}