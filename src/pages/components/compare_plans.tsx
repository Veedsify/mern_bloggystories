import PlanFeatures from "./sub_components/plan_feature";

const ComparePlans = () => {
  return (
    <>
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-4 py-3 md:px-7 md:py-5 text-white">
          <div className="mb-16 flex flex-col items-center">
            <h1 className="text-5xl font-medium OF mb-7">Compare Plans</h1>
            <p className="max-w-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              voluptate debitis distinctio dolore ad quisquam quam, id eos eaque
              eum, in quis accusantium aperiam doloremque quos voluptates soluta
              unde possimus.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
            <div className="shadow p-5 rounded-lg border-t-4 border-red-400 bg-white">
              <p className="uppercase text-sm font-medium text-gray-500">
                Starter
              </p>

              <p className="mt-4 text-3xl text-gray-700 font-medium">Free</p>
              <p className="mt-4 font-medium text-gray-700">
                Enjoy more features with the power of pro
              </p>

              <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4">
                  <PlanFeatures
                    plan={{
                      text: "30 days only",
                      available: true,
                      color: "red",
                    }}
                  />
                  <PlanFeatures
                    plan={{
                      text: "Markdown Editor",
                      available: true,
                      color: "red",
                    }}
                  />
                  <PlanFeatures
                    plan={{
                      text: "24 Hour Approval time",
                      available: true,
                      color: "red",
                    }}
                  />
                  <PlanFeatures
                    plan={{
                      text: "Temporary Account",
                      available: true,
                      color: "red",
                    }}
                  />
                  <PlanFeatures
                    plan={{
                      text: "Basic Profile",
                      available: true,
                      color: "red",
                    }}
                  />
                  <PlanFeatures
                    plan={{
                      text: "Less Features",
                      available: true,
                      color: "red",
                    }}
                  />
                </ul>
              </div>

              <div className="mt-8">
                <button className="bg-gray-400 hover:bg-gray-500 px-3 py-4 rounded-lg w-full text-white">
                  Signup Now
                </button>
              </div>
            </div>

            <div className="shadow p-5 rounded-lg border-t-4 border-green-400 bg-white">
              <p className="uppercase text-sm font-medium text-gray-500">
                Standard
              </p>

              <p className="mt-4 text-3xl text-gray-700 font-medium">
                $10 <span className="text-base font-normal">/month</span>
              </p>

              <p className="mt-4 font-medium text-gray-700">
                Enjoy more features with the power of pro
              </p>

              <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4">
                  <PlanFeatures
                    plan={{
                      text: "Pro Editor",
                      available: true,
                      color: "green",
                    }}
                  />
                  <PlanFeatures
                    plan={{
                      text: "Ecommerce Access",
                      available: true,
                      color: "green",
                    }}
                  />
                  <PlanFeatures
                    plan={{
                      text: "Immediate Approval time",
                      available: true,
                      color: "green",
                    }}
                  />
                  <PlanFeatures
                    plan={{
                      text: "Permanent Account",
                      available: true,
                      color: "green",
                    }}
                  />
                  <PlanFeatures
                    plan={{
                      text: "Pro Profile",
                      available: true,
                      color: "green",
                    }}
                  />
                  <PlanFeatures
                    plan={{
                      text: "Extra Features",
                      available: true,
                      color: "green",
                    }}
                  />
                </ul>
              </div>

              <div className="mt-8">
                <button className="bg-green-400 hover:bg-green-500 px-3 py-4 rounded-lg w-full text-white">
                  Go Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComparePlans;
