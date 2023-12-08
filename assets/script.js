const submitBtn = document.getElementById("submit");
const thankYouCard = (rating) => `
    <div class="card-gradient w-fit rounded-[25px] max-w-[400px] grid place-items-center gap-7 px-6 py-10">
      <img
        role="img"
        src="./assets/images/illustration-thank-you.svg"
        alt="Thank you illustration"
      />

      <div class="bg-another-grey text-orange flex items-center justify-center py-1 px-5 rounded-full">
        <p>You selected ${rating} out of 5</p>
      </div>

      <div class="grid gap-4 text-center mt-4">
        <h1 role="heading" class="font-bold text-3xl">Thank you!</h1>
        <p role="doc-subtitle" class="text-slate-400 text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&apos;t hesitate to get in touch!
        </p>
      </div>
    </div>
    `;

submitBtn.addEventListener("click", () => {
  const rating = document.querySelector("input[name=rating]:checked").value;
  document.body.innerHTML = thankYouCard(rating);
});
