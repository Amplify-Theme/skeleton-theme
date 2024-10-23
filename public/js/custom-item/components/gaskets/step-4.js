export default  {
    name : 'step-4',
    template : `
      <div :class="orderStep === 3 ? 'order-step-block' : 'order-step-d-none'" v-if="gasketProfileStatus"
           class="row mb-4 mb-sm-5">
      <div class="col-md-6">
        <div class="title mb-3 d-flex align-items-center gap-2">
          <i :class="stepFourProductGasketProfile ? 'text-success' : 'text-black-50'"
             class="icon-circle-check"></i>
          <h5 class="mb-0 text-danger text-uppercase fw-600">Step 04</h5>
        </div>
        <div class="border rounded-md d-flex align-items-center justify-content-between p-3">
          <div class="fw-500 text-uppercase">Number of Sides:</div>
          <div class="d-flex gap-3">
            <div class="form-check">
              <input @change="$parent.nextStep = true" v-model="$parent.stepFourProductGasketProfile" value="3"
                     class="form-check-input custom-radio-color" type="radio" id="step-1">
              <label class="form-check-label" for="step-1">3</label>
            </div>
            <div class="form-check">
              <input @change="$parent.nextStep = true" v-model="$parent.stepFourProductGasketProfile" value="4"
                     class="form-check-input custom-radio-color" type="radio" id="step-2">
              <label class="form-check-label" for="step-2">4</label>
            </div>
          </div>
        </div>
      </div>
      </div>
    `,

    props:['orderStep','gasketProfileStatus','stepFourProductGasketProfile','nextStep']
}