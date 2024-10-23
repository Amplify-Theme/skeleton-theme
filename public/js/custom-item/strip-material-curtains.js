import MaterialStripOne from './components/strip-material-curtains/step-1.js';
import MaterialStripTwo from './components/strip-material-curtains/step-2.js';
export default {
    name    : 'stripMaterialCurtains',
    template: `
      <div class="container padding-bottom-3x mb-1 custom-product custom-product-replacement-strip-curtains">
        <div class="row">
          <div class="col-12">
            <h3 class="fw-600 text-dark text-capitalize mb-4">Order Bulk Strip Material for Strip Curtains</h3>

            <!--STEP 01-->
            <MaterialStripOne
                :curtainsStatus="curtainsStatus"
                :stepOneProductCurtains="stepOneProductCurtains"
            />

            <!--STEP 02-->
            <MaterialStripTwo 
                :stepTwoProductCurtainsArea="stepTwoProductCurtainsArea"
                :curtainsStatus="curtainsStatus"
                :stepThreeProductCurtainsFoot="stepThreeProductCurtainsFoot"
                :stepThreeProductCurtainsFeet="stepThreeProductCurtainsFeet"
                :stepFourProductCurtainsTotalPrice="stepFourProductCurtainsTotalPrice"
                :stepFourProductCurtainsQuantity="stepFourProductCurtainsQuantity"
            />
            
          </div>
        </div>

      </div>

    `,
    components:  {
        MaterialStripOne,MaterialStripTwo
    },
    data() {
        return {
            step            : '',
            orderStep            : 1,
            currentStepValue: '',
            stepOneProductCurtains: [
                {
                    img  : 'strip-material/4.png',
                    title: 'THICKNESS: 0.08 MIL',
                    type : '4 INCH'
                },
                {
                    img  : 'strip-material/6.png',
                    title: 'THICKNESS: 0.08 MIL',
                    type : '6 INCH'
                },
                {
                    img  : 'strip-material/8.png',
                    title: 'THICKNESS: 0.08 MIL',
                    type : '8 INCH'
                },
                {
                    img  : 'strip-material/12.png',
                    title: 'THICKNESS: 0.08 MIL',
                    type : '12 INCH'
                },
            ],
            curtainsStatus         : '',
            stepTwoProductCurtainsArea:'',
            stepThreeProductCurtainsFeet:'',
            stepThreeProductCurtainsFoot:'',
            stepFourProductCurtainsQuantity:'',
            stepFourProductCurtainsTotalPrice:'',

        }
    },

    methods:{

    }
};