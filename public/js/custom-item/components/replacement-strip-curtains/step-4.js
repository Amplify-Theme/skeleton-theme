export default {
name: 'step-4',
    template : `
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="title mb-3 d-flex align-items-center gap-2">
            <i :class="stepFourProductCurtainsTotalPrice ? 'text-success' : 'text-black-50'"
               class="icon-circle-check"></i>
            <h5 class="mb-0 text-danger text-uppercase fw-600">Step 04</h5>
          </div>
          <div class="border rounded-md p-3">
            <div class="d-flex align-items-center justify-content-between">
              <div class="fw-500 text-uppercase">QUANTITY: <span class="text-danger">*</span></div>
              <select :disabled="!stepThreeProductCurtains" v-model="$parent.stepFourProductCurtainsQuantity"
                      class="form-control w-110">
                <option value="">CHOOSE</option>
                <option value="1">1</option>
                <option value="1">2</option>
              </select>
            </div>
            <div class="d-flex align-items-center justify-content-between my-4">
              <div class="fw-500 text-uppercase">TOTAL FEET</div>
              <input :disabled="!stepFourProductCurtainsQuantity" v-model="$parent.stepFourProductCurtainsFeet" type="text"
                     placeholder="00" class="form-control w-110">
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <div class="fw-500 text-uppercase">TOTAL PRICES:</div>
              <input :disabled="!stepFourProductCurtainsFeet" v-model="$parent.stepFourProductCurtainsTotalPrice" type="text"
                     placeholder="00"
                     class="form-control w-110">
            </div>
          </div>
        </div>

        <!--SUBMIT BUTTON-->
        <div class="col-12">
          <button type="submit" class="btn btn-primary"
                  :disabled="!stepFourProductCurtainsTotalPrice">Submit
          </button>
        </div>
      </div>
    `,

    props:['stepFourProductCurtainsTotalPrice','stepThreeProductCurtains','stepFourProductCurtainsQuantity','stepFourProductCurtainsFeet']
}