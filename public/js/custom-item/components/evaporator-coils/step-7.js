export default  {
    name : 'step-7',
    template : `
      <div :class="orderStep === 3 ? 'order-step-block' : 'order-step-d-none'" class="row mb-4 mb-sm-5">
      <div class="col-md-12">
        <div class="title mb-3 d-flex align-items-center gap-2">
          <i :class="stepSeven ? 'text-success' : 'text-black-50'" class="icon-circle-check"></i>
          <h5 class="mb-0 text-danger text-uppercase fw-600">Step 07</h5>
        </div>

        <div class="border rounded-md p-3">
          <form class="row g-3">
            <div class="col-md-4 mb-4">
              <label for="contactName" class="form-label text-uppercase">CONTACT NAME <span
                  class="text-danger">*</span></label>
              <input :disabled="!stepSix" type="text" class="form-control" id="contactName"
                     placeholder="Input your name ">
            </div>
            <div class="col-md-4 mb-4">
              <label for="contactMethod" class="form-label text-uppercase">Method of contact <span
                  class="text-danger">*</span></label>
              <input :disabled="!stepSix" type="text" class="form-control" id="contactMethod"
                     placeholder="Input your email address or phone number">
            </div>
            <div class="col-md-4 mb-4">
              <label for="companyName" class="form-label text-uppercase">Company Name <span
                  class="text-danger">*</span></label>
              <input :disabled="!stepSix" type="text" class="form-control" id="companyName"
                     placeholder="Input your name">
            </div>
            <div class="col-md-3 mb-4">
              <label for="address" class="form-label text-uppercase">Address <span
                  class="text-danger">*</span></label>
              <input :disabled="!stepSix" type="text" class="form-control" id="address"
                     placeholder="Input your address">
            </div>
            <div class="col-md-3 mb-4">
              <label for="city" class="form-label text-uppercase">CITY <span class="text-danger">*</span></label>
              <input :disabled="!stepSix" type="text" class="form-control" id="city"
                     placeholder="Input your city">
            </div>
            <div class="col-md-3 mb-4">
              <label for="state" class="form-label text-uppercase">STATE <span
                  class="text-danger">*</span></label>
              <input :disabled="!stepSix" type="text" class="form-control" id="state"
                     placeholder="Input your state">
            </div>
            <div class="col-md-3 mb-4">
              <label for="zipcode" class="form-label text-uppercase">ZIPCODE <span
                  class="text-danger">*</span></label>
              <input :disabled="!stepSix" type="text" class="form-control" id="zipcode"
                     placeholder="Input your zip code">
            </div>
            <div class="col-md-12 mb-4">
              <label for="notes" class="form-label text-uppercase">ADDITIONAL NOTES</label>
              <textarea :disabled="!stepSix" name="" class="form-control" placeholder="Enter a description..."
                        id="notes"
                        rows="4"></textarea>
            </div>

            <div class="col-12">
              <button type="submit" class="d-none d-sm-block btn btn-primary" :disabled="!stepSix">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div class="col-md-12 mt-4">
        <div class="mb-5">
          <small class="text-danger text-uppercase mb-3 d-block">Required Field</small>
          <div class="d-flex gap-2">
            <h6 class="mb-3">Note: </h6>
            <div>
              <p class="mb-2">Please <span class="text-danger">carefully check</span> your quote. All custom items
                are
                non-returnable.</p>
              <p class="mb-2">&#8226; An RHS sales representative will contact you the next business day to
                confirm
                your custom evaporator coil quote.</p>
              <p class="mb-2">&#8226; If your quote is approved and updated to an order, depending on job
                requirements, custom coil manufacture times range between 4 and 6 weeks.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    `,

    props:['orderStep','stepSeven','stepSix'],
}