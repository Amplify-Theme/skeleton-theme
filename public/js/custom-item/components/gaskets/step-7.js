export default  {
    name : 'step-7',
    template : `
      <div :class="orderStep === 4 ? 'order-step-block' : 'order-step-d-none'"
           v-if="currentWidth < 576  || stepSixProductGasketProfile" class="row">
      <div class="col-md-6 mb-4">
        <div class="title mb-3 d-flex align-items-center gap-2">
          <i :class="stepSevenProductGasketTotalPrice ? 'text-success' : 'text-black-50'"
             class="icon-circle-check"></i>
          <h5 class="mb-0 text-danger text-uppercase fw-600">Step 07</h5>
        </div>
        <div class="border rounded-md p-3">
          <div class="d-flex align-items-center justify-content-between">
            <div class="fw-500 text-uppercase">QUANTITY:</div>
            <select class="form-control w-110">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="1">2</option>
            </select>
          </div>
          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="fw-500 text-uppercase">TOTAL MATERIAL PER FOOT:</div>
            <input type="text" placeholder="00" class="form-control w-110">
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="fw-500 text-uppercase">TOTAL PRICES:</div>
            <input v-model="$parent.stepSevenProductGasketTotalPrice" type="text" placeholder="00"
                   class="form-control w-110">
          </div>
        </div>
      </div>

      <!--SUBMIT BUTTON-->
      <div class="col-12">
        <button type="submit" class="d-none d-sm-block btn btn-primary"
                :disabled="!stepSevenProductGasketTotalPrice">Submit
        </button>
      </div>
      </div>
    `,

    props:['orderStep','currentWidth','stepSixProductGasketProfile','stepSevenProductGasketTotalPrice']
}