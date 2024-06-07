import { section } from './recipeRegisterPage.css';

import { TopBar } from '@/components/Common';
import { RecipeRegisterForm } from '@/components/Recipe';
import { useRecipeFormValueContext } from '@/hooks/context';

export const RecipeRegisterPage = () => {
  const { isValid } = useRecipeFormValueContext();

  return (
    <>
      <TopBar>
        <TopBar.LeftNavigationGroup title="조합 작성" />
        <TopBar.RegisterButton form="recipe-form" disabled={!isValid} />
      </TopBar>
      <main>
        <section className={section}>
          <RecipeRegisterForm />
        </section>
      </main>
    </>
  );
};

export default RecipeRegisterPage;
