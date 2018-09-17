import * as filmCategoryActionType from '../constant/filmCategoryActionType'

export const onLoadFilmsCategory = (category) => ({ type: filmCategoryActionType.FILMSFROMCATEGORY_WILL_LOAD, payload: category})