export default  {
    name : 'step-2',
    template : `
        <div>
          <div class="row mb-md-5 mb-4">
            <div class="col-md-6">
              <div class="title mb-3 d-flex align-items-center gap-2">
                <i :class="stepTwoProductCurtainsArea ? 'text-success' : 'text-black-50'"
                   class="icon-circle-check"></i>
                <h5 class="mb-0 text-danger text-uppercase fw-600">Step 02</h5>
              </div>
              <div class="border rounded-md p-3">
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="fw-500 text-uppercase">SPECIFY USAGE OF CURTAIN AREA: <span class="text-danger">*</span></div>
                  <select :disabled="!curtainsStatus" v-model="$parent.stepTwoProductCurtainsArea"
                          class="form-control w-110">
                    <option value="">CHOOSE</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="fw-500 text-uppercase">PRICE PER FOOT</div>
                  <input :disabled="!stepTwoProductCurtainsArea" v-model="$parent.stepTwoProductCurtainsPerFoot" type="text" placeholder="00" class="form-control w-110">
                </div>
              </div>
            </div>
          </div>

          <!--STEP 03-->
          <div class="row mb-md-5 mb-4">
            <div class="col-md-6">
              <div class="title mb-3 d-flex align-items-center gap-2">
                <i :class="stepThreeProductCurtains ? 'text-success' : 'text-black-50'"
                   class="icon-circle-check"></i>
                <h5 class="mb-0 text-danger text-uppercase fw-600">Step 03</h5>
              </div>
              <div class="border rounded-md p-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="fw-500 text-uppercase">SPECIFY USAGE OF CURTAIN AREA: <span class="text-danger">*</span></div>
                  <select :disabled="!stepTwoProductCurtainsPerFoot" v-model="$parent.stepThreeProductCurtains"
                          class="form-control w-110">
                    <option value="">CHOOSE</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    `,

    props:['stepTwoProductCurtainsArea','curtainsStatus','stepTwoProductCurtainsPerFoot','stepThreeProductCurtains'],
}