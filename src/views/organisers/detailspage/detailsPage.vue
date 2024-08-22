<template>
    <div class="offerDetailsMainContainer">
        <div class="offerHeader">
            <i class="pi pi-arrow-left" style="margin: 1vh 0 1vh 5vh;font-size: 1.5rem; cursor: pointer;" @click="handleBackNavigation"></i>
            <h1 class="offerHeading">Offer Details</h1>
        </div>
        <div class="offerHeadingContainer">
            <h2 class="offerHeadingDetails">Monkey D Luffy - 7376222AL155</h2>
            <button class="DownloadDetails_button">
                <i class="pi pi-download" style="margin-right: 0.5vh;"></i>
                Download
            </button>
        </div>
        <div class="offerContentContainer">
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Name  <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">Monkey D Luffy</h2>
                </div>
            </div>
            <div class="offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Roll Number <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">7376222AL155</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Gender<span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">Male </h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Mobile Number<span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">9876543210</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Degree <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">Artificial Intelligence And Machine Learning</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Branch <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">B.Tech</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Batch <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">2022-2026 </h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Native <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">North Blue</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company name <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">Straw Hats Private Limited</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company Category <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">IT product</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Placement Organized By <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">Own</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company Location <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">Coimbatore , Tamil Nadu</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Internship Joining Date  <span style="color: red;">*</span></h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsHighlight">21.07.2025</h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Stipend <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">15000 /- </h2>
                </div>
            </div>
            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Company CTC <br /> (Salary) <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent">21.07.2025</h2>
                </div>
            </div>
            <div class=" offerDetialsProofContainer">
                <div class="offerLeftProofContainer">
                    <h2 class="offerDetailsHeading">Available Proofs <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightProofContainer">
                    <div class="checkBoxInputContainer">
                        <input class = "ProofCheckBox" type="checkbox" id="mailConfirmation" v-model="checkboxes.mailConfirmation">
                        <label class = "offerDetailsContent" for="mailConfirmation">Mail Confirmation </label>
                    </div>

                    <div class="checkBoxInputContainer">
                        <input class = "ProofCheckBox" type="checkbox" id="internshipLetter" v-model="checkboxes.internshipLetter">
                        <label class = "offerDetailsContent"  for="internshipLetter">Internship Letter  </label>
                    </div>

                    <div class= "checkBoxInputContainer"> 
                        <input class = "ProofCheckBox" type="checkbox" id="letterOfIntent" v-model="checkboxes.letterOfIntent">
                        <label class = "offerDetailsContent"  for="letterOfIntent">Letter of Intent  </label>
                    </div>

                    <div class= "checkBoxInputContainer"> 
                        <input class = "ProofCheckBox" type="checkbox" id="OfferLetter" v-model="checkboxes.OfferLetter">
                        <label class = "offerDetailsContent"  for="OfferLetter">Offer Letter </label>
                    </div>
                </div>
            </div>
            <div class = "offerFileUploadContainer">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Mail Confirmation (Screen Shot) <br /> size (less than 1MB) <span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <div>
                     <button class="custom-file-input">
                        <a :href="MailImgSrc" target="_blank" v-if="MailImgSrc">
                            <img :src="CloudUpload" alt="Cloud Upload" style="width: 18vh; height:18vh; margin-right: 0.5vh;"/>
                        </a>
                    </button>
                    </div>
                </div>
            </div>

            <div class = "offerFileUploadContainer">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Internship Letter <br /> size (less than 1MB) <span style="color: red;">*</span> <br />(pdf Only)  </h2>
                </div>
                <div class="offerRightContainer">
                    <div>
                     <button class="custom-file-input">
                        <a :href="IlPdfSrc" target="_blank" v-if="IlPdfSrc">
                            <img :src="CloudUpload" alt="Cloud Upload" style="width: 18vh; height:18vh; margin-right: 0.5vh;"/>
                        </a>
                    </button>
                    </div>
                </div>
            </div>

            <div class = "offerFileUploadContainer">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Letter of Intent (LOT)  <br /> size (less than 1MB) <span style="color: red;">*</span> <br />(pdf Only)  </h2>
                </div>
                <div class="offerRightContainer">
                    <div>
                     <button class="custom-file-input">
                        <a :href="LOTPdfSrc" target="_blank" v-if="LOTPdfSrc">
                            <img :src="CloudUpload" alt="Cloud Upload" style="width: 18vh; height:18vh; margin-right: 0.5vh;"/>
                        </a>
                    </button>
                    </div>
                </div>
            </div>

            <div class = "offerFileUploadContainer">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Offer Letter <br /> size (less than 1MB) <span style="color: red;">*</span> <br />(pdf Only)  </h2>
                </div>
                <div class="offerRightContainer">
                    <div>
                     <button class="custom-file-input">
                        <a :href="OLPdfSrc" target="_blank" v-if="OLPdfSrc">
                            <img :src="CloudUpload" alt="Cloud Upload" style="width: 18vh; height:18vh; margin-right: 0.5vh;"/>
                        </a>
                    </button>
                    </div>
                </div>
            </div>

            <div class=" offerDetails">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Status<span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent" :class ="{'rejected' : status === 'Rejected', 'approved' : status === 'Approved' }">{{ status }}</h2>
                </div>
            </div>

            <div class=" offerDetails" v-if = "status === 'Rejected'">
                <div class="offerLeftContainer">
                    <h2 class="offerDetailsHeading">Reason For Rejection<span style="color: red;">*</span> </h2>
                </div>
                <div class="offerRightContainer">
                    <h2 class="offerDetailsContent" style = "color: red;">{{ rejectedReason }}</h2>
                </div>
            </div>
            
        </div>
        <div>
        </div>
    </div>
</template>

<script>
import 'primeicons/primeicons.css';
import CloudUpload from '../../../assets/cloudUpload.png';


export default {
    name: "OrganisersIndividualDetailsPage",
    data() {
        return {
            checkboxes: {
                mailConfirmation: false,
                internshipLetter: false,
                letterOfIntent: false
            },
            CloudUpload: CloudUpload,
            status: 'Approved',
            MailImgSrc : CloudUpload,
            IlPdfSrc : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            LOTPdfSrc : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            OLPdfSrc : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"

        };
    },
    methods : {
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        handleBackNavigation() {
            this.$router.push('/organisers/batchStudentDetails');
        }
    }
}
</script>

<style scoped>
.hidden {
    display: none;
}
.rejected{
    color: red;
}
.approved{
    color: #1DB954;
}
</style>
