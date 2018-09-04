using Newtonsoft.Json;

namespace APIFilmCatalog.WEB.ViewModels
{
    public abstract class BaseJsonResult<T>
    {
        [JsonProperty(PropertyName = "errorMessage")]
        public string ErrorMessage { get; set; }

        [JsonProperty(PropertyName = "data")]
        public T Data { get; set; }
    }
}