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
              <div class="d-flex align-items-center justify-content-between">
                <div class="fw-500 text-uppercase">SPECIFY USAGE OF CURTAIN AREA:<span class="text-danger">*</span>
                </div>
                <select :disabled="!curtainsStatus" v-model="$parent.stepTwoProductCurtainsArea"
                        class="form-control w-110">
                  <option value="">CHOOSE</option>
                  <option value="1">1</option>
                  <option value="1">2</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!--STEP 03-->
        <div class="row mb-md-5 mb-4">
          <div class="col-md-6">
            <div class="title mb-3 d-flex align-items-center gap-2">
              <i :class="stepThreeProductCurtainsFoot ? 'text-success' : 'text-black-50'"
                 class="icon-circle-check"></i>
              <h5 class="mb-0 text-danger text-uppercase fw-600">Step 03</h5>
            </div>
            <div class="border rounded-md p-3">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="fw-500 text-uppercase">LENGTH OF MATERIAL IN FEET: <span class="text-danger">*</span>
                </div>
                <select :disabled="!stepTwoProductCurtainsArea" v-model="$parent.stepThreeProductCurtainsFeet"
                        class="form-control w-110">
                  <option value="">CHOOSE</option>
                  <option value="1">1</option>
                  <option value="1">2</option>
                </select>
              </div>

              <div class="d-flex align-items-center justify-content-between">
                <div class="fw-500 text-uppercase">PRICE PER FOOT</div>
                <input :disabled="!stepThreeProductCurtainsFeet" v-model="$parent.stepThreeProductCurtainsFoot" type="text"
                       placeholder="00"
                       class="form-control w-110">
              </div>
            </div>
          </div>
        </div>

        <!--STEP 04-->
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="title mb-3 d-flex align-items-center gap-2">
              <i :class="stepFourProductCurtainsTotalPrice ? 'text-success' : 'text-black-50'"
                 class="icon-circle-check"></i>
              <h5 class="mb-0 text-danger text-uppercase fw-600">Step 04</h5>
            </div>
            <div class="border rounded-md p-3">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="fw-500 text-uppercase">QUANTITY: <span class="text-danger">*</span></div>
                <select :disabled="!stepThreeProductCurtainsFoot" v-model="$parent.stepFourProductCurtainsQuantity"
                        class="form-control w-110">
                  <option value="">CHOOSE</option>
                  <option value="1">1</option>
                  <option value="1">2</option>
                </select>
              </div>

              <div class="d-flex align-items-center justify-content-between">
                <div class="fw-500 text-uppercase">TOTAL PRICES:</div>
                <input :disabled="!stepFourProductCurtainsQuantity" v-model="$parent.stepFourProductCurtainsTotalPrice"
                       type="text"
                       placeholder="00"
                       class="form-control w-110">
              </div>
            </div>
          </div>

          <!--SUBMIT BUTTON-->
          <div class="col-12">
            <p class="my-4"><span class="text-danger">NOTE:</span> Please carefully check your order. All custom
              orders are non-returnable.</p>
            <button type="submit" class="btn btn-primary"
                    :disabled="!stepFourProductCurtainsTotalPrice">Submit
            </button>
          </div>
        </div>
      </div>

    `,

    props:['stepTwoProductCurtainsArea','curtainsStatus','stepThreeProductCurtainsFoot', 'stepThreeProductCurtainsFeet', 'stepFourProductCurtainsTotalPrice','stepFourProductCurtainsQuantity'],
}