namespace APIFilmCatalog.WEB.ViewModels
{
    public class SuccessJsonResult<T> : BaseJsonResult<T>
    {
        public SuccessJsonResult(T data)
        {
            this.Data = data;
        }
    }
}