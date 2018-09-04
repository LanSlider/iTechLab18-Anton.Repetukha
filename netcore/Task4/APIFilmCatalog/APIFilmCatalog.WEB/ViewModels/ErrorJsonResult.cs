namespace APIFilmCatalog.WEB.ViewModels
{
    public class ErrorJsonResult<T> : BaseJsonResult<T>
    {
        public ErrorJsonResult(string errorMessage)
        {
            this.ErrorMessage = errorMessage;
        }
    }
}