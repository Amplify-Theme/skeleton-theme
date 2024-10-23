export default  {
    name : 'step-1',
    template : `
      <div>
          <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
            <div class="col-md-6">
              <div class="title mb-3 d-flex align-items-center gap-2">
                <i :class="stepTwo ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
                <h5 class="mb-0 text-danger text-uppercase fw-600">Step 02</h5>
              </div>
              <div class="border rounded-md p-3">
                <div class="d-flex align-items-center mb-4 gap-3">
                  <div class="fw-500">DIAMETER OFOUTER FRAME WIRE: <span class="text-danger">*</span></div>
                  <input :disabled="stepOneValue" v-model="$parent.stepTwo" type="text" placeholder="0"
                         class="form-control w-90">
                </div>
                <div class="d-flex gap-2">
                  <b>Note:</b>
                  <div>
                    <span class="d-block">3/8" or 5/16" frames are considered COMMERCIAL GRADE. These shelves have 1/8" mesh crosswire.</span>
                    <br>
                    <b>HD (HEAVY DUTY) frames have 3/8" frames, but thicker5/32" mesh crosswire. HD shelving is for
                      maximum strength</b>
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
              <div class="border rounded-md p-3">
                <div class="mb-3 d-flex align-items-center justify-content-between">
                  <div class="fw-500">FINISH: <span class="text-danger">*</span></div>
                  <input :disabled="!stepTwo" v-model="$parent.stepThree" type="text" placeholder="0" class="form-control w-90">
                </div>
    
                <div class="mb-3 d-flex align-items-center justify-content-between">
                  <div class="fw-500">PRICE PERSQUARE INCH: <span class="text-danger">*</span></div>
                  <input :disabled="!stepTwo" v-model="$parent.stepThree" type="text" placeholder="0" class="form-control w-90">
                </div>
    
                <div class="d-flex gap-2">
                  <b>Note:</b>
                  <div>ALL finishes are F.D.A. approved.</div>
                </div>
              </div>
            </div>
          </div>
    
          <!--STEP 04-->
          <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row">
        <div class="col-md-6 mb-4">
          <div class="title mb-3 d-flex align-items-center gap-2">
            <i :class="stepFour ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
            <h5 class="mb-0 text-danger text-uppercase fw-600">Step 04</h5>
          </div>
          <div class="border rounded-md p-3">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="fw-500">QUANTITY:</div>
              <input :disabled="!stepThree" v-model="$parent.stepFour" type="text" placeholder="0"
                     class="form-control w-90">
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <div class="fw-500">TOTAL PRICE:</div>
              <input :disabled="!stepThree" v-model="$parent.stepFour" type="text" placeholder="0"
                     class="form-control w-90">
            </div>
          </div>
        </div>

        <div class="col-12 mb-4">
          <button type="submit" class="d-none d-sm-block btn btn-primary" :disabled="!stepFour">Submit</button>
        </div>

        <div class="col-md-12">
          <small class="text-danger text-uppercase mb-3 fw-600 d-block">Required Field</small>
          <div class="d-flex gap-2">
            <h6 class="mb-3">Note: </h6>
            <div>
              <p class="mb-2">Please carefully <span class="text-danger">check your order</span> All custom orders are
                non-returnable.</p>
              <p class="mb-2">&#8226; RHS also offers wire shelving with cut-outs, extensions, legs & risers.</p>
              <p class="mb-2">&#8226; Please call if you require a more complex custom wire shelf.Depending upon job
                requirements, custom wire shelf manufacture times range between 4 to 6 weeks.</p>
              <p>Manufacturing tolerance of +/- 1/8"</p>
            </div>
          </div>
        </div>
      </div>

      </div>
    `,

    props:['orderStep','stepTwo','stepOneValue','stepThree','stepFour'],
}