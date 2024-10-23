export default  {
    name : 'step-2',
    template : `
        <div>
        <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
          <div class="col-md-12">
            <div class="title mb-3 d-flex align-items-center gap-2">
              <i :class="wireStepFour ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
              <h5 class="mb-0 text-danger text-uppercase fw-600">Step 04</h5>
            </div>
            <div class="border rounded-md p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="fw-500">TOTAL LENGTH (INCHES):<span class="text-danger">*</span></div>
                <select  v-model="$parent.wireStepFour" class="form-control w-110">
                  <option value="">Choose</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div class="mt-4">
                <span class="text-danger">NOTE:</span> RHS adds 18" of non-heated lead wire to your total circuit length. Lead wire maybe cut for installation purposes.
              </div>
            </div>
          </div>
        </div>

        <!-- STEP 05 -->
        <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
          <div class="col-md-12">
            <div class="title mb-3 d-flex align-items-center gap-2">
              <i :class="wireStepFive ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
              <h5 class="mb-0 text-danger text-uppercase fw-600">Step 05</h5>
            </div>
            <div class="border rounded-md p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="fw-500">NUMBER OF WRAPS: <span class="text-danger">*</span></div>
                <select  v-model="$parent.wireStepFive" class="form-control w-110">
                  <option value="">Choose</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div class="mt-4">
                <span class="text-danger">NOTE:</span> This value will only affect the wattage output (per foot) of the wire.It has no bearing on your total length value.
              </div>
            </div>
          </div>
        </div>

        <!-- STEP 06 -->
        <div :class="orderStep === 2 ? 'order-step-block' : 'order-step-d-none'" class="row">
          <div class="col-md-12">
            <div class="title mb-3 d-flex align-items-center gap-2">
              <i :class="wireStepSixQuantity ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
              <h5 class="mb-0 text-danger text-uppercase fw-600">Step 06</h5>
            </div>
            <div class="border rounded-md p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="fw-500">QUANTITY:</div>
                <input v-model="$parent.wireStepSixQuantity" type="text" placeholder="0"
                       class="form-control w-110">
              </div>
              <div class="d-flex align-items-center justify-content-between my-4">
                <div class="fw-500">TOTAL FEET:</div>
                <input v-model="$parent.wireStepSixTotalFeet" type="text" placeholder="0"
                       class="form-control w-110">
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div class="fw-500">TOTAL PRICE:</div>
                <input v-model="$parent.wireStepSixTotalPrice" type="text" placeholder="0"
                       class="form-control w-110">
              </div>
            </div>
          </div>

          <div class="col-12 mt-4 mt-md-4">
            <button type="submit" class="d-none d-sm-block btn btn-primary" :disabled="!wireStepSixTotalPrice">Submit</button>
          </div>
        </div>
        </div>
        
    `,

    props:['orderStep','wireStepFour','wireStepFive','wireStepSixQuantity','wireStepSixTotalFeet','wireStepSixTotalPrice'],
}