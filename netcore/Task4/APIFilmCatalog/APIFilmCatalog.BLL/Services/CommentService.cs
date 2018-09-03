using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using APIFilmCatalog.BLL.Interfaces;
using APIFilmCatalog.BLL.Models;
using APIFilmCatalog.DAL.Entities;
using APIFilmCatalog.DAL.Interfaces;
using AutoMapper;

namespace APIFilmCatalog.BLL.Services
{
    public class CommentService : ICommentService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CommentService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task AddCommentAsync(CommentModel comment)
        {
            _unitOfWork.Comments.Add(_mapper.Map<CommentModel, Comment>(comment));
            await _unitOfWork.SaveAsync();
        }

        public async Task<ICollection<CommentModel>> GetCommentsByIdFilmAsync(int id)
        {
            return _mapper.Map<ICollection<Comment>, ICollection<CommentModel>>(await _unitOfWork.Comments.GetCommentsByFilmIdAsync(id));
        }
    }
}
