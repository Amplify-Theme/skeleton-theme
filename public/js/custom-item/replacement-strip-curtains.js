import ReplacementStripOne from './components/replacement-strip-curtains/step-1.js';
import ReplacementStripTwo from './components/replacement-strip-curtains/step-2.js';
import ReplacementStripFour from './components/replacement-strip-curtains/step-4.js';

export default {
    name    : 'ReplacementStripCurtains',
    template: `
      <div class="container padding-bottom-3x mb-1 custom-product custom-product-replacement-strip-curtains">
        <div class="row">
          <div class="col-12">
            <h3 class="fw-600 text-dark text-capitalize mb-4">Order Replacement Strips for RHS Curtains</h3>

            <!--STEP 01-->
            <ReplacementStripOne 
                :curtainsStatus="curtainsStatus"
                :stepOneProductCurtains="stepOneProductCurtains"
                :stepTwoProductCurtainsPerFoot="stepTwoProductCurtainsPerFoot"
                :stepThreeProductCurtains="stepThreeProductCurtains"
            />
            
            <!--STEP 02-->
            <ReplacementStripTwo
               :stepTwoProductCurtainsArea="stepTwoProductCurtainsArea" 
               :curtainsStatus="curtainsStatus"
               :stepTwoProductCurtainsPerFoot="stepTwoProductCurtainsPerFoot"
               :stepThreeProductCurtains="stepThreeProductCurtains"
            />
            
            <!--STEP 04-->
            
            <ReplacementStripFour
                :stepFourProductCurtainsTotalPrice="stepFourProductCurtainsTotalPrice"
                :stepThreeProductCurtains="stepThreeProductCurtains"
                :stepFourProductCurtainsQuantity="stepFourProductCurtainsQuantity"
                :stepFourProductCurtainsFeet="stepFourProductCurtainsFeet"
            />
            
          </div>
        </div>

      </div>

    `,
    components:  {
        ReplacementStripOne,
        ReplacementStripTwo,
        ReplacementStripFour
    },
    data() {
        return {
            step            : '',
            orderStep            : 1,
            currentStepValue: '',
            stepOneProductCurtains: [
                {
                    img  : 'strip-replacement/4.png',
                    title: 'THICKNESS: 0.08 MIL',
                    type : '4 INCH'
                },
                {
                    img  : 'strip-replacement/6.png',
                    title: 'THICKNESS: 0.08 MIL',
                    type : '6 INCH'
                },
                {
                    img  : 'strip-replacement/8.png',
                    title: 'THICKNESS: 0.08 MIL',
                    type : '8 INCH'
                },
            ],
            curtainsStatus         : '',
            stepTwoProductCurtainsArea:'',
            stepTwoProductCurtainsPerFoot:'',
            stepThreeProductCurtains:'',
            stepFourProductCurtainsQuantity:'',
            stepFourProductCurtainsFeet:'',
            stepFourProductCurtainsTotalPrice:'',

        }
    },

    methods:{

    }
};