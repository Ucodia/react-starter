const Brownies = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-center">Classic Fudgy Brownies</h1>

        <section>
          <div className="space-y-6">
            <div>
              <h2>Ingredients</h2>
              <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-2">
                <li>1 cup (226g) unsalted butter</li>
                <li>2 cups (400g) granulated sugar</li>
                <li>4 large eggs</li>
                <li>2 teaspoons vanilla extract</li>
                <li>1 cup (85g) unsweetened cocoa powder</li>
                <li>1 cup (125g) all-purpose flour</li>
                <li>1/2 teaspoon salt</li>
                <li>1 cup (170g) chocolate chips</li>
              </ul>
            </div>

            <div>
              <h2>Instructions</h2>
              <ol className="list-decimal list-inside text-muted-foreground ml-4 space-y-2">
                <li>
                  Preheat oven to 350°F (175°C). Line a 9x13 inch pan with
                  parchment paper.
                </li>
                <li>
                  Melt butter in a large microwave-safe bowl. Add sugar and mix
                  well.
                </li>
                <li>Beat in eggs one at a time, then stir in vanilla.</li>
                <li>
                  Combine cocoa powder, flour, and salt; gradually stir into the
                  wet ingredients.
                </li>
                <li>Fold in chocolate chips.</li>
                <li>Pour into prepared pan and spread evenly.</li>
                <li>
                  Bake for 30-35 minutes or until a toothpick comes out with a
                  few moist crumbs.
                </li>
                <li>Let cool completely before cutting into squares.</li>
              </ol>
            </div>

            <div className="mt-4">
              <p className="italic text-muted-foreground">
                Tip: For extra fudgy brownies, refrigerate them for a few hours
                after cooling!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Brownies;
