export default  {
    name : 'step-2',
    template : `
      <div>
          <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row">
            <div class="col-md-6 mb-4">
              <div class="title mb-3 d-flex align-items-center gap-2">
                <i :class="stepTwo ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
                <h5 class="mb-0 text-danger text-uppercase fw-600">Step 02</h5>
              </div>
              <div class="border rounded-md p-3">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <div class="fw-500">THICKNESS: <span class="text-danger">*</span></div>
                  <input :disabled="stepOneValue" v-model="$parent.stepTwo" type="text" placeholder="0"
                         class="form-control w-90">
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="fw-500">PRICE PER SQUARE INCH:<span class="text-danger">*</span></div>
                  <input :disabled="stepOneValue" v-model="$parent.stepTwo" type="text" placeholder="0"
                         class="form-control w-90">
                </div>
              </div>
            </div>
          </div>
    
          <!--STEP 03-->
          <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row">
        <div class="col-md-6 mb-4">
          <div class="title mb-3 d-flex align-items-center gap-2">
            <i :class="stepThree ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
            <h5 class="mb-0 text-danger text-uppercase fw-600">Step 03</h5>
          </div>
          <div class="border rounded-md p-3">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="fw-500">QUANTITY:</div>
              <input :disabled="!stepTwo" v-model="$parent.stepThree" type="text" placeholder="0"
                     class="form-control w-90">
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="fw-500">TOTAL SQUARE INCHES:</div>
              <input :disabled="!stepTwo" v-model="$parent.stepThree" type="text" placeholder="0"
                     class="form-control w-90">
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <div class="fw-500">TOTAL PRICES:</div>
              <input :disabled="!stepTwo" v-model="$parent.stepThree" type="text" placeholder="0"
                     class="form-control w-90">
            </div>
          </div>
        </div>

        <div class="col-12 mb-4">
          <button type="submit" class="d-none d-sm-block btn btn-primary" :disabled="!stepThree">Submit</button>
        </div>

        <div class="col-md-12">
          <small class="text-danger text-uppercase mb-3 fw-600 d-block">Required Field</small>
          <div class="d-flex gap-2">
            <h6 class="mb-3">Note: </h6>
            <div>
              <p class="mb-2">Please carefully <span class="text-danger">check your order</span>. All custom orders are
                non-returnable.</p>
              <p class="mb-2">&#8226; Any cutting board over 104" long may be subject to Motor Freight charges.Price
                shown above does not include shipping.</p>
              <p>Custom cutting board manufacture times range between 2 and 3 weeks.</p>
            </div>
          </div>
        </div>
      </div>
      </div>

    `,

    props:['orderStep','stepTwo','stepOneValue','stepThree'],
}